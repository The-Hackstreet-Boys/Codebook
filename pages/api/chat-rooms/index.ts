import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import ChatRoomModel from '@/models/chatRoom';
import UserModel, { User } from '@/models/user';
import MessageModel from '@/models/message';
import { query } from 'express';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      try {
        if (req.body.participants.length < 2) {
          res.status(400);
          return;
        }

        const chatRoom = new ChatRoomModel({
          ...req.body,
          participants: [...req.body.participants, req.user._id],
        });

        await chatRoom.save();
        res.json(chatRoom);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'GET':
      try {
        const chatRooms = await ChatRoomModel.find({ participants: req.user._id })
          .sort({
            lastActiveAt: -1,
          })
          .populate({ path: 'participants', model: UserModel });
          const extendedChatRooms = await Promise.all(chatRooms.map(async(chatRoom) => {
            const lastMessage = await MessageModel.findOne({room: chatRoom._id}).sort({createdAt: -1});
            switch (chatRoom.type) {
              case 'private':
                const otherUser = (chatRoom.participants as unknown as User[]).find(
                  (participant) => participant._id !== req.user._id,
                );
                return { ...chatRoom.toObject(), otherUser, lastMessage };

              default:
                return { ...chatRoom.toObject(), lastMessage };
            }
          }))
        res.json(
          extendedChatRooms
        );
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
