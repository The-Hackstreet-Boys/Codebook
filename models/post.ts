import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

export interface Post extends Document {
  author: string;
  text: string;
  likeCount: number;
  likes: string[];
  commentCount: number;
  tags: Types.ObjectId[];
  picture?: { url: string; width: number; height: number };
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<Post>(
  {
    author: { required: true, type: String, ref: 'User', index: true },
    text: { required: true, type: String, maxlength: 10000 },
    likeCount: { type: Number, default: 0, min: 0 },
    likes: { type: [String], ref: 'User' },
    commentCount: { type: Number, default: 0, min: 0 },
    tags: { type: [Schema.Types.ObjectId], ref: 'Tag' },
    picture: { url: String, width: Number, height: Number },
  },
  { timestamps: true },
);

export default (mongoose.models.Post ||
  model<Post>('Post', postSchema, 'posts')) as Model<Post>;
