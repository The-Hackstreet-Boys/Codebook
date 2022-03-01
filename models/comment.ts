import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

interface BaseComment extends Document {
  author: string;
  text: string;
  likeCount: number;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment extends BaseComment {
  type: 'comment';
  post: Types.ObjectId;
  replyCount: number;
}

export interface Reply extends BaseComment {
  type: 'reply';
  post: Types.ObjectId;
  comment: Types.ObjectId;
}

type Data = Comment | Reply;

const commentSchema = new Schema<Data>(
  {
    type: { required: true, type: String, enum: ['comment', 'reply'] },
    post: { required: true, type: Schema.Types.ObjectId, ref: 'Post' },
    comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
    author: { required: true, type: String, ref: 'User' },
    text: { required: true, type: String, maxLength: 2500 },
    likeCount: { type: Number, default: 0, min: 0 },
    likes: { type: [String], ref: 'User' },
    replyCount: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true },
);

export default (mongoose.models.Comment ||
  model<Data>('Comment', commentSchema, 'comments')) as Model<Data>;
