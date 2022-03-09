import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import ChatRoomModel from '@/models/chatRoom';
import MessageModel from '@/models/message';
import UserModel from '@/models/user';
import { NextApiResponseServerIO } from '@/types/next';

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
        const messages = await MessageModel.find({ room: roomId }).populate({
          path: 'author',
          model: UserModel,
        });

        res.json(messages);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'POST':
      try {
        const message = new MessageModel({
          ...req.body,
          room: roomId,
          author: req.user._id,
        });

        await message.save();

        const populatedMessage = await message.populate('author');

        res.socket.server.io.to(roomId).emit('message', populatedMessage);
        console.log(populatedMessage);

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
