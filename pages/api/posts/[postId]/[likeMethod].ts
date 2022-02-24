import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import PostModel from '../../../../models/post';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId, likeMethod } = req.query;
  if (likeMethod !== 'like' && likeMethod !== 'unlike') {
    res.status(404);
    return;
  }

  switch (req.method) {
    case 'POST':
      try {
        const userId = req.user._id;
        const post = await PostModel.findById(postId);

        if (!post) {
          res.status(404).send('No post found!');
          return;
        }

        if (userId === post.author) {
          res.status(400).send('Cannot like your own post!');
          return;
        }

        const method = likeMethod === 'like' ? '$push' : '$pull';
        const countMethod = likeMethod === 'like' ? '$inc' : '$dec';
        const updatedPost = await PostModel.findByIdAndUpdate(postId, {
          [method]: { likes: userId },
          [countMethod]: { likeCount: 1 },
        });

        if (!updatedPost) {
          res.status(404).send('Post not found!');
          return;
        }

        res.send(`Successfully ${likeMethod} post!`);
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
