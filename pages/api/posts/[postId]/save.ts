import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { Types } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import PostModel from '../../../../models/post';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  switch (req.method) {
    case 'POST':
      try {
        const post = await PostModel.findById(postId);

        if (!post) {
          res.status(404).send(`No post found with id ${postId}!`);
          return;
        }

        const alreadySaved = req.user.savedPosts.includes(postId as unknown as Types.ObjectId);

        if (alreadySaved) {
          await req.user.updateOne({
            $pull: { savedPosts: postId },
          });

          res.send(`The post has been saved!`);
        } else {
          await req.user.updateOne({
            $push: { savedPosts: postId },
          });

          res.send(`The post has been unsaved!`);
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
