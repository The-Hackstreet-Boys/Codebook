import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import ChatRoomModel from '@/models/chatRoom';
import UserModel from '@/models/user';
import { NextApiResponseServerIO } from '@/types/next';

const handler = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  const { userId } = req.query;

  const user = await UserModel.findById(userId);

  if (!user) {
    res.status(404).send(`No user found with id ${userId}!`);
    return;
  }

  switch (req.method) {
    case 'GET':
      try {
        const room = await ChatRoomModel.findOne({
          type: 'private',
          participants: { $all: [userId, req.user._id] },
        });

        if (!room) {
          const newRoom = new ChatRoomModel({
            type: 'private',
            participants: [userId, req.user._id],
          });

          await newRoom.save();

          res.json(newRoom);
          return;
        }

        res.json(room);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
