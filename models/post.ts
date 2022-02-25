import mongoose, { Document, Model, Schema, model,Types } from 'mongoose';

export interface Post extends Document {
  author: string;
  text: string;
  likeCount: number;
  likes: string[];
  commentCount: number;
  tags: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<Post>(
  {
    author: { required: true, type: String, ref: 'User', index: true },
    text: { required: true, type: String, maxlength: 10000 },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
    likes: { type: [String], required: true, ref: 'User' },
    commentCount: { type: Number, required: true, default: 0, min: 0 },
    tags: { required: true, type: [Schema.Types.ObjectId], ref: 'Tag' },
  },
  { timestamps: true },
);

export default (mongoose.models.Post ||
  model<Post>('Post', postSchema, 'posts')) as Model<Post>;
