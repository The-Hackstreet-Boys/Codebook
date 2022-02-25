import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../../middleware/authentication';
import connectToDatabase from '../../../../../middleware/connectToDatabase';
import CommentModel from '../../../../../models/comment';
import PostModel from '../../../../../models/post';
import UserModel from '../../../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  const post = await PostModel.findById(postId);

  if (!post) {
    res.status(404).send(`No post found with id ${postId}!`);
    return;
  }

  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 5;
        const skipAmount = (page - 1) * limit;

        const query = {
          type: 'comment',
          post: postId,
        };

        const comments = await CommentModel.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(skipAmount)
          .populate({
            path: 'author',
            model: UserModel,
          });

        const data = comments.map((comment) => ({
          ...comment.toObject(),
          hasLiked: comment.likes.includes(req.user.id),
        }));

        const documentCount = await CommentModel.countDocuments(query);
        const totalPages = Math.ceil(documentCount / limit);

        res.json({ data, limit, page, totalPages });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'POST':
      try {
        const comment = new CommentModel({
          ...req.body,
          post: postId,
          author: req.user._id,
          type: 'comment',
        });
        await comment.save();

        await post.updateOne({ $inc: { commentCount: 1 } });

        res.json(comment);
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
