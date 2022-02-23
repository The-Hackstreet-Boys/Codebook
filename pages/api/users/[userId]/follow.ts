import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import UserModel from '../../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  switch (req.method) {
    case 'POST':
      try {
        const currentUserId = req.user._id;

        await UserModel.findByIdAndUpdate(userId, {
          followers: { $push: currentUserId },
        });

        await UserModel.findByIdAndUpdate(currentUserId, {
          following: { $push: userId },
        });

        res.send('Successfully followed user!');
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
