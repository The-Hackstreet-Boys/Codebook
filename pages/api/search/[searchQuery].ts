import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../middleware/authentication';
import connectToDatabase from '../../../middleware/connectToDatabase';
import TagModel from '../../../models/tag';
import UserModel from '../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { searchQuery } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const query = { name: { $regex: searchQuery, $options: 'i' } };
        const tags = await TagModel.find(query).limit(5);
        const users = await UserModel.find(query).limit(5);

        res.json({ tags, users });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
