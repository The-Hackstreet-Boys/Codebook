import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDatabase = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) return handler(req, res);

    mongoose.connect(MONGODB_URI);

    return handler(req, res);
  };
};

export default connectToDatabase;
