import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import MessageModel from '@/models/message';
import UserModel from '@/models/user';
import Filter from 'bad-words';

const filter = new Filter();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { messageId } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const skipAmount = (page - 1) * limit;

        const author = req.query.author as string;

        const query: any = {};
        if (author) query.author = author;

        const messages = await MessageModel.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(skipAmount)
          .populate({
            path: 'author',
            model: UserModel,
          });

        const documentCount = await MessageModel.countDocuments(query);
        const pageCount = Math.ceil(documentCount / limit);

        res.json({ messages, limit, page, pageCount });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'POST':
      try {
        const message = new MessageModel({
          ...req.body,
          author: req.user._id,
          text: filter.clean(req.body.text),
        });

        await message.save();
        res.json(message);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;

    case 'DELETE':
      try {
        const message = await MessageModel.findById(messageId);
        if (!message) {
          res.status(404).send(`No message found with id ${messageId}!`);
          return;
        }
        if (message.author !== req.user._id) {
          res.status(403).send('Not authorised to delete');
          return;
        }

        await MessageModel.deleteMany({ message: messageId });
        const deletedMessage = await message.deleteOne();

        res.json(deletedMessage);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['DELETE', 'GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
