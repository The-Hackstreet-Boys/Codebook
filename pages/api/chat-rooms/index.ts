import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import ChatRoomModel from '@/models/chatRoom';
import UserModel from '@/models/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        const chatRoom = new ChatRoomModel({
          ...req.body,
        });

        await chatRoom.save();
        res.json(chatRoom);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

      case 'GET':
        try {
          const chatRooms = await ChatRoomModel.find({ participants: req.user._id }).sort({lastActiveAt:-1});
          
             res.json(chatRooms);

        } catch (err) {
          res.status(500).json({ error: (err as Error).message || err });
        }
        break;
  
    default:
      res.setHeader('Allow', ['POST', 'GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
