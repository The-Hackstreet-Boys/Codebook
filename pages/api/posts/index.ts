import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../middleware/authentication';
import connectToDatabase from '../../../middleware/connectToDatabase';
import PostModel from '../../../models/post';
import UserModel from '../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit =  parseInt(req.query.limit as string) || 20;
        const skipAmount = (page-1)*limit

        const data = await PostModel.find().limit(limit).skip(skipAmount).populate({
          path: 'author',
          model: UserModel,
        });

        const totalPages = await PostModel.countDocuments()

        res.json({data, limit, page, totalPages});
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    case 'POST':
      try {
        const post = new PostModel({ ...req.body, author: req.user._id });

        await post.save();
        res.json(post);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
