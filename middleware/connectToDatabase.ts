import mongoose from 'mongoose';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const MONGODB_URI = process.env.MONGODB_URI;

const connectToDatabase = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (mongoose.connections[0].readyState) return handler(req, res);

      if (!MONGODB_URI) {
        res.status(500).send('No database URI provided!');
        return;
      }

      mongoose.connect(MONGODB_URI);

      return handler(req, res);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message || err });
    }
  };
};

export default connectToDatabase;
