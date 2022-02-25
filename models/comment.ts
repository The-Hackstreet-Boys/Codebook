import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

interface BaseComment extends Document {
  author: string;
  text: string;
  likeCount: number;
  likes: string[];
}

export interface Comment extends BaseComment {
  type: 'comment';
  post: Types.ObjectId;
}

export interface Reply extends BaseComment {
  type: 'reply';
  comment: Types.ObjectId;
}

type Data = Comment | Reply;

const commentSchema = new Schema<Data>(
  {
    type: { required: true, type: String, enum: ['comment', 'reply'] },
    post: { type: Schema.Types.ObjectId, ref: 'Post' },
    comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
    author: { required: true, type: String, ref: 'User' },
    text: { required: true, type: String },
    likeCount: { type: Number, required: true, default: 0, min: 0 },
    likes: { type: [String], required: true, ref: 'User' },
  },
  { timestamps: true },
);

export default (mongoose.models.Comment ||
  model<Data>('Comment', commentSchema, 'comments')) as Model<Data>;
