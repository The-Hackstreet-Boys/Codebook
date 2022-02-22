import mongoose, { Document, Model, Schema, model } from 'mongoose';

import { User } from './user';

export interface Comment extends Document {
  author: User;
  text: string;
  likeCount: number;
  replyCount: number;
}

const commentSchema = new Schema<Comment>(
  {
    author: { required: true, type: String, ref: 'User' },
    text: { required: true, type: String },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
    replyCount: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

export default (mongoose.models.Comment ||
  model<Comment>('Comment', commentSchema, 'comments')) as Model<Comment>;
