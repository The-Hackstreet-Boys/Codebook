import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import ChatRoomModel from '@/models/chatRoom';
import MessageModel from '@/models/message';
import UserModel from '@/models/user';
import { NextApiResponseServerIO } from '@/types/next';
import MediaModel from '@/models/media';
import { Types } from 'mongoose';

const handler = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
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

        res.socket.server.io.to(roomId).emit('message', populatedMessage);

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
