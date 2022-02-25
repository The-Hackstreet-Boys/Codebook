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

        if (currentUserId === userId) {
          res.status(400).send('Cannot follow yourself!');
          return;
        }

        const user = await UserModel.findById(userId);

        if (!user) {
          res.status(404).send(`No user found with id ${userId}!`);
          return;
        }

        const alreadyFollowing = req.user.following.includes(userId as string);

        console.log(alreadyFollowing);

        if (alreadyFollowing) {
          await user.updateOne({
            $pull: { followers: currentUserId },
          });

          await req.user.updateOne({
            $pull: { following: userId },
            name: 'test',
          });

          console.log(user);

          res.send(`The user has been unfollowed!`);
        } else {
          await user.updateOne({
            $push: { followers: currentUserId },
          });

          await req.user.updateOne({
            $push: { following: userId },
          });

          res.send(`The user has been followed!`);
        }
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
