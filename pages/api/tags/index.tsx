import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../middleware/authentication';
import connectToDatabase from '../../../middleware/connectToDatabase';
import Tag from '../../../models/tag';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const tags = await Tag.find();

        res.json(tags);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    case 'POST':
      try {
        const tag = new Tag(req.body);

        await tag.save();
        res.json(tag);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
