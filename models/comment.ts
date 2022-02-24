import mongoose, { Document, Model, Schema, model } from 'mongoose';

import { User } from './user';

export type CommentType = 'comment' | 'reply';

export interface Comment extends Document {
  type: CommentType;
  author: User;
  text: string;
  likeCount: number;
  likes: User[];
}

const commentSchema = new Schema<Comment>(
  {
    type: { required: true, type: String, enum: ['comment', 'reply'] },
    author: { required: true, type: String, ref: 'User' },
    text: { required: true, type: String },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
    likes: { type: [String], required: true, ref: 'User' },
  },
  { timestamps: true },
);

export default (mongoose.models.Comment ||
  model<Comment>('Comment', commentSchema, 'comments')) as Model<Comment>;
