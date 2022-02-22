import { getSession } from '@auth0/nextjs-auth0';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import UserModel from '../models/user';

const createOrUpdateUser = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = getSession(req, res);

    if (!session) {
      res.status(403).send('No session found!');
      return;
    }

    const { user } = session;
    const { name, email, picture, sub } = user;

    const existingUser = await UserModel.findById(sub);

    if (existingUser) {
      existingUser.name = name;
      existingUser.picture = picture;
      existingUser.email = email;

      await existingUser.save();
    } else {
      const newUser = new UserModel({ _id: sub, name, picture, email });
      await newUser.save();
    }

    return handler(req, res);
  };
};

export default createOrUpdateUser;
