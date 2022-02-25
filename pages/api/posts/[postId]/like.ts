import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import PostModel from '../../../../models/post';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  switch (req.method) {
    case 'POST':
      try {
        const userId = req.user._id;
        const post = await PostModel.findById(postId);

        if (!post) {
          res.status(404).send(`No post found with id ${postId}!`);
          return;
        }

        if (userId === post.author) {
          res.status(400).send('Cannot like your own post!');
          return;
        }

        const alreadyLiked = post.likes.includes(userId);

        if (alreadyLiked) {
          await post.updateOne({
            $pull: { likes: userId },
            $inc: { likeCount: -1 },
          });

          res.send(`The post has been disliked!`);
        } else {
          await post.updateOne({
            $push: { likes: userId },
            $inc: { likeCount: 1 },
          });

          res.send(`The post has been liked!`);
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
