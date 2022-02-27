import { getSession } from '@auth0/nextjs-auth0';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import UserModel from '../models/user';

const authentication = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const session = getSession(req, res);

      if (!session) {
        res.status(403).send('No session found!');
        return;
      }

      const { user } = session;
      const { name, email, picture, sub } = user;

      const existingUser = await UserModel.findById(sub);

      if (existingUser) {
        await existingUser.updateOne({
          name,
          picture,
          email,
          lastActiveAt: new Date(),
        });

        req.user = existingUser;
      } else {
        const newUser = new UserModel({ _id: sub, name, picture, email });
        await newUser.save();

        req.user = newUser;
      }

      return handler(req, res);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message || err });
    }
  };
};

export default authentication;
