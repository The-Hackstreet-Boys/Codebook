import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '../../../../middleware/authentication';
import connectToDatabase from '../../../../middleware/connectToDatabase';
import UserModel from '../../../../models/user';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const { following, _id } = req.user;

        const contacts = await UserModel.find({
          _id: { $in: following, $ne: _id },
        });

        const suggestedContacts = await UserModel.find({
          _id: { $nin: following, $ne: _id },
        }).limit(6);

        res.json({ contacts, suggestedContacts });
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
