import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import Filter from 'bad-words';
import { Types } from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import MediaModel from '@/models/media';
import PostModel from '@/models/post';
import TagModel from '@/models/tag';
import UserModel from '@/models/user';

const filter = new Filter();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 20;
        const skipAmount = (page - 1) * limit;

        const author = req.query.author as string;
        const onlySavedPosts = (req.query.onlySavedPosts as string) === 'true' ? true : false;
        const tag = req.query.tag as string;

        const query: any = {};
        if (author) query.author = author;
        if (tag) query.tags = tag;
        if (onlySavedPosts) query._id = { $in: req.user.savedPosts };

        const posts = await PostModel.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(skipAmount)
          .populate({
            path: 'author',
            model: UserModel,
          })
          .populate({
            path: 'tags',
            model: TagModel,
          })
          .populate({
            path: 'image',
            model: MediaModel,
          })
          .populate({
            path: 'code',
            model: MediaModel,
          });

        const data = posts.map((post) => ({
          ...post.toObject(),
          hasLiked: post.likes.includes(req.user.id),
          hasSaved: req.user.savedPosts.includes(post._id),
        }));

        const documentCount = await PostModel.countDocuments(query);
        const pageCount = Math.ceil(documentCount / limit);

        res.json({ data, limit, page, pageCount });
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    case 'POST':
      try {
        const { image, code, ...rest } = req.body;

        let imageId: Types.ObjectId | undefined = undefined;
        let codeId: Types.ObjectId | undefined = undefined;

        if (image) {
          const newImage = new MediaModel({
            author: req.user._id,
            type: 'image',
            ...image,
          });
          await newImage.save();
          imageId = newImage._id;
        }

        if (code) {
          const newCode = new MediaModel({
            author: req.user._id,
            type: 'code',
            ...code,
          });
          await newCode.save();
          codeId = newCode._id;
        }

        const post = new PostModel({
          ...rest,
          author: req.user._id,
          text: filter.clean(req.body.text),
          code: codeId,
          image: imageId,
        });

        await post.save();

        res.json(post);
      } catch (err) {
        res.status(500).json({ error: (err as Error).message || err });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
