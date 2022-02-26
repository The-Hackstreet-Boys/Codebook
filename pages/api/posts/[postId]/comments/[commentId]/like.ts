import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../../../middleware/authentication';
import connectToDatabase from '../../../../../../middleware/connectToDatabase';
import CommentModel from '../../../../../../models/comment';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;

  switch (req.method) {
    case 'POST':
      try {
        const userId = req.user._id;
        const comment = await CommentModel.findById(commentId);

        if (!comment) {
          res.status(404).send(`No comment found with id ${commentId}!`);
          return;
        }

        const alreadyLiked = comment.likes.includes(userId);

        if (alreadyLiked) {
          await comment.updateOne({
            $pull: { likes: userId },
            $inc: { likeCount: -1 },
          });

          res.send(`The post has been disliked!`);
        } else {
          await comment.updateOne({
            $push: { likes: userId },
            $inc: { likeCount: 1 },
          });

          res.send(`The comment has been liked!`);
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
