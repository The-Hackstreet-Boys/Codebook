import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { Types } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import Pusher from 'pusher';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import ChatRoomModel from '@/models/chatRoom';
import MediaModel from '@/models/media';
import MessageModel from '@/models/message';
import UserModel from '@/models/user';

export const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID as string,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY as string,
  secret: process.env.PUSHER_SECRET as string,
  cluster: process.env.PUSHER_CLUSTER as string,
  useTLS: true,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { roomId } = req.query;

  const room = await ChatRoomModel.findById(roomId);

  if (!room) {
    res.status(404).send(`No room found with id ${roomId}!`);
    return;
  }

  if (!room.participants.includes(req.user.id)) {
    res.status(403).send('You are not a participant in this chat room!');
    return;
  }

  switch (req.method) {
    case 'GET':
      try {
        const messages = await MessageModel.find({ room: roomId })
          .populate({
            path: 'author',
            model: UserModel,
          })
          .populate({
            path: 'image',
            model: MediaModel,
          })
          .populate({
            path: 'code',
            model: MediaModel,
          });

        res.json(messages);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'POST':
      try {
        const { image, code, ...rest } = req.body;

        let imageId: Types.ObjectId | undefined = undefined;
        let codeId: Types.ObjectId | undefined = undefined;

        if (image) {
          const newImage = new MediaModel({
            author: req.user._id,
            type: 'image',
            ...image,
          });
          await newImage.save();
          imageId = newImage._id;
        }

        if (code) {
          const newCode = new MediaModel({
            author: req.user._id,
            type: 'code',
            ...code,
          });
          await newCode.save();
          codeId = newCode._id;
        }

        const message = new MessageModel({
          ...req.body,
          room: roomId,
          author: req.user._id,
          code: codeId,
          image: imageId,
        });

        await message.save();

        await ChatRoomModel.findByIdAndUpdate(roomId, { lastActiveAt: Date.now() });

        const populatedMessage = await message.populate([
          {
            path: 'author',
            model: UserModel,
          },
          {
            path: 'image',
            model: MediaModel,
          },
          {
            path: 'code',
            model: MediaModel,
          },
        ]);

        await pusher.trigger(roomId, 'message', populatedMessage);

        res.json(populatedMessage);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
