import mongoose, { Document, Schema, model } from 'mongoose';

import { Tag } from './tag';
import { User } from './user';

export interface Post extends Document {
  author: User;
  text: string;
  likeCount: number;
  commentCount: number;
  tags: Tag[];
}

const postSchema = new Schema<Post>(
  {
    author: { required: true, type: Schema.Types.ObjectId, ref: 'User' },
    text: { required: true, type: String },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
    commentCount: { type: Number, required: true, default: 0, min: 0 },
    tags: { required: true, type: [Schema.Types.ObjectId], ref: 'Tag' },
  },
  { timestamps: true },
);

export default mongoose.models.Post || model<Post>('Post', postSchema, 'posts');
