import mongoose, { Document, Schema, model } from 'mongoose';

import { User } from './user';

export interface Reply extends Document {
  author: User;
  text: string;
  likeCount: number;
}

const replySchema = new Schema<Reply>(
  {
    author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
    text: { required: true, type: String },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
  },
  { timestamps: true },
);

export default mongoose.models.Reply ||
  model<Reply>('Reply', replySchema, 'replies');
