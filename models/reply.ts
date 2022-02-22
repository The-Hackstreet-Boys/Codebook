import mongoose, { Document, Model, Schema, model } from 'mongoose';

import { User } from './user';

export interface Reply extends Document {
  author: User;
  text: string;
  likeCount: number;
}

const replySchema = new Schema<Reply>(
  {
    author: { required: true, type: String, ref: 'User' },
    text: { required: true, type: String },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

export default (mongoose.models.Reply ||
  model<Reply>('Reply', replySchema, 'replies')) as Model<Reply>;
