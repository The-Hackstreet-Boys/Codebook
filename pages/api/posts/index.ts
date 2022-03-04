import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import Filter from 'bad-words';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../middleware/authentication';
import connectToDatabase from '../../../middleware/connectToDatabase';
import PostModel from '../../../models/post';
import TagModel from '../../../models/tag';
import UserModel from '../../../models/user';

const filter = new Filter();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const skipAmount = (page - 1) * limit;

        const author = req.query.author as string;

        const query: { author?: string } = {};
        if (author) query.author = author;

        const posts = await PostModel.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(skipAmount)
          .populate({
            path: 'author',
            model: UserModel,
          })
          .populate({
            path: 'tags',
            model: TagModel,
          });

        const data = posts.map((post) => ({
          ...post.toObject(),
          hasLiked: post.likes.includes(req.user.id),
        }));

        const commentCount = await PostModel.countDocuments(query);
        const pageCount = Math.ceil(commentCount / limit);

        res.json({ data, limit, page, pageCount, commentCount });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    case 'POST':
      try {
        const post = new PostModel({
          ...req.body,
          author: req.user._id,
          text: filter.clean(req.body.text),
        });

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
