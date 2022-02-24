import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import UserModel from '../../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, followMethod } = req.query;
  if (followMethod !== 'follow' && followMethod !== 'unfollow') {
    res.status(404);
    return;
  }

  switch (req.method) {
    case 'POST':
      try {
        const currentUserId = req.user._id;

        if (currentUserId === userId) {
          res.status(400).send('Cannot follow yourself!');
          return;
        }

        const method = followMethod === 'follow' ? '$push' : '$pull';

        const updatedUser = await UserModel.findByIdAndUpdate(userId, {
          [method]: { followers: currentUserId },
        });

        if (!updatedUser) {
          res.status(404).send('User not found!');
          return;
        }

        await UserModel.findByIdAndUpdate(currentUserId, {
          [method]: { following: userId },
        });

        res.send(`Successfully ${followMethod} user!`);
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
