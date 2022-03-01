import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import CommentModel from '../../../../models/comment';
 import PostModel from '../../../../models/comment';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId} = req.query;

  switch (req.method) {
    case 'DELETE':
      try {
        const post = await PostModel.findById(postId);
        if (!post) {
          res.status(404).send(`No post found with id ${postId}!`);
          return;
        }
        if (post.author !== req.user._id) {
          res.status(403).send('Not authorised to delete');
          return;
        }
        
        
    await CommentModel.deleteMany({post: postId})   
     const deletedPost =   await  post.deleteOne();
     
     res.json(deletedPost);

      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
