import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import CommentModel from '@/models/comment';
import PostModel from '@/models/post';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { commentId } = req.query;

  switch (req.method) {
    case 'DELETE':
      try {
        const comment = await CommentModel.findById(commentId);

        if (!comment) {
          res.status(404).send(`No comment found with id ${commentId}!`);
          return;
        }

        if (comment.author !== req.user._id) {
          res.status(403).send('Not authorised to delete');
          return;
        }

        if (comment.type === 'reply') {
          await CommentModel.findByIdAndUpdate(comment.comment, {
            $inc: { replyCount: -1 },
          });
        }

        if (comment.type === 'comment') {
          await PostModel.findByIdAndUpdate(comment.post, {
            $inc: { commentCount: -1 },
          });
        }

        await CommentModel.deleteMany({ type: 'reply', comment: commentId });

        const deletedComment = await comment.deleteOne();

        res.json(deletedComment);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
