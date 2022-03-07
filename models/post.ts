import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { Tag } from '@/models/tag';
import { ExtendedUser } from '@/models/user';

export interface Post extends Document {
  author: string;
  text: string;
  likeCount: number;
  likes: string[];
  commentCount: number;
  tags: Types.ObjectId[];
  image?: { url: string; width: number; height: number };
  code?: { text: string; language: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface ExtendedPost extends Omit<Post, 'author' | 'tags'> {
  author: ExtendedUser;
  tags: Tag[];
  hasLiked: boolean;
  hasSaved: boolean;
}

const postSchema = new Schema<Post>(
  {
    author: { required: true, type: String, ref: 'User', index: true },
    text: { required: true, type: String, maxlength: 10000 },
    likeCount: { type: Number, default: 0, min: 0 },
    likes: { type: [String], ref: 'User' },
    commentCount: { type: Number, default: 0, min: 0 },
    tags: { type: [Schema.Types.ObjectId], ref: 'Tag' },
    image: { url: String, width: Number, height: Number },
    code: { text: String, language: String },
  },
  { timestamps: true },
);

const PostModel = (mongoose.models.Post ?? model<Post>('Post', postSchema, 'posts')) as Model<Post>;

export default PostModel;
