import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import PostModel from '../../../../models/post';
import TagModel from '../../../../models/tag';
import UserModel from '../../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const user = await UserModel.findById(userId)
          .populate({
            path: 'savedPosts',
            model: PostModel,
          })
          .populate({
            path: 'tags',
            model: TagModel,
          });

        if (!user) {
          res.status(404).json({ error: `No user found with ID ${userId}` });
          return;
        }

        const isFollowing = req.user.following.includes(user._id);
        const isFollowingYou = req.user.followers.includes(user._id);
        res.json({ ...user.toObject(), isFollowing, isFollowingYou });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
