import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../middleware/connectToDatabase';
import PostModel from '../../../models/post';
import UserModel from '../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const posts = await PostModel.find().populate({
          path: 'author',
          model: UserModel,
        });

        res.json(posts);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'POST':
      try {
        const post = new PostModel(req.body);

        await post.save();
        res.json(post);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default connectToDatabase(handler);
