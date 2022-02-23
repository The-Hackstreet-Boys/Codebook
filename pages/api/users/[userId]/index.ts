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
            path: 'followers',
            model: UserModel,
          })
          .populate({
            path: 'following',
            model: UserModel,
          })
          .populate({
            path: 'savedPosts',
            model: PostModel,
          })
          .populate({
            path: 'tags',
            model: TagModel,
          });

        res.json(user);
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
