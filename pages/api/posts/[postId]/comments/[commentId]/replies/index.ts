import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import CommentModel from '../../../../../../../models/comment';
import UserModel from '../../../../../../../models/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { commentId } = req.query;

  const comment = await CommentModel.findById(commentId);

  if (!comment) {
    res.status(404).send(`No comment found with id ${commentId}`);
    return;
  }

  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const skipAmount = (page - 1) * limit;

        const query = {
          type: 'reply',
          comment: commentId,
        };

        const data = await CommentModel.find(query)
          .limit(limit)
          .skip(skipAmount)
          .populate({
            path: 'author',
            model: UserModel,
          });

        const documentCount = await CommentModel.countDocuments(query);
        const totalPages = Math.ceil(documentCount / limit);

        res.json({ data, limit, page, totalPages });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
  }
};
