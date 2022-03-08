import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { Tag } from '@/models/tag';
import { ExtendedUser } from '@/models/user';
import { Code, Image } from './media';

export interface Post extends Document {
  author: string;
  text: string;
  likeCount: number;
  likes: string[];
  commentCount: number;
  tags: Types.ObjectId[];
  image?: Types.ObjectId;
  code?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExtendedPost extends Omit<Post, 'author' | 'tags' | 'image'| 'code'> {
  author: ExtendedUser;
  tags: Tag[];
  hasLiked: boolean;
  hasSaved: boolean;
  image?: Image;
  code?: Code;
}

const postSchema = new Schema<Post>(
  {
    author: { required: true, type: String, ref: 'User', index: true },
    text: { required: true, type: String, maxlength: 10000 },
    likeCount: { type: Number, default: 0, min: 0 },
    likes: { type: [String], ref: 'User' },
    commentCount: { type: Number, default: 0, min: 0 },
    tags: { type: [Schema.Types.ObjectId], ref: 'Tag' },
    image: { type: Schema.Types.ObjectId, ref: 'Media' },
    code: { type: Schema.Types.ObjectId, ref: 'Media' },
  },
  { timestamps: true },
);

const PostModel = (mongoose.models.Post ?? model<Post>('Post', postSchema, 'posts')) as Model<Post>;

export default PostModel;
