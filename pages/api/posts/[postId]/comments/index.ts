import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../../middleware/authentication';
import connectToDatabase from '../../../../../middleware/connectToDatabase';
import CommentModel from '../../../../../models/comment';
import PostModel from '../../../../../models/post';

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
        const comments = await CommentModel.find({
          type: 'comment',
          post: postId,
        });

        res.json(comments);
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
