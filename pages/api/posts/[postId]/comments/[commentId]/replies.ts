import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../../../middleware/authentication';
import connectToDatabase from '../../../../../../middleware/connectToDatabase';
import CommentModel from '../../../../../../models/comment';
import UserModel from '../../../../../../models/user';
import Filter from 'bad-words';

const filter = new Filter();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;

  const comment = await CommentModel.findById(commentId);

  if (!comment) {
    res.status(404).send(`No comment found with id ${commentId}!`);
    return;
  }

  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 5;
        const skipAmount = (page - 1) * limit;

        const query = {
          type: 'reply',
          comment: commentId,
        };

        const replies = await CommentModel.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(skipAmount)
          .populate({
            path: 'author',
            model: UserModel,
          });

        const data = replies.map((reply) => ({
          ...reply.toObject(),
          hasLiked: reply.likes.includes(req.user.id),
        }));

        const documentCount = await CommentModel.countDocuments(query);
        const pageCount = Math.ceil(documentCount / limit);

        res.json({ data, limit, page, pageCount });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'POST':
      try {
        const reply = new CommentModel({
          ...req.body,
          comment: commentId,
          author: req.user._id,
          type: 'reply',
          text: filter.clean(req.body.text),
        });
        await reply.save();

        await comment.updateOne({ $inc: { replyCount: 1 } });

        res.json(reply);
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
