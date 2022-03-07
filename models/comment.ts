import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { User } from '@/models/user';

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

export type CommentOrReply = Comment | Reply;

export interface ExtendedComment extends Omit<Comment, 'author' | 'post'> {
  author: User;
  hasLiked: boolean;
  post: string;
}

export interface ExtendedReply extends Omit<Reply, 'author' | 'comment'> {
  author: User;
  hasLiked: boolean;
  comment: string;
}

export type ExtendedCommentOrReply = ExtendedComment | ExtendedReply;

const commentSchema = new Schema<CommentOrReply>(
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

const CommentModel = (mongoose.models.Comment ??
  model<CommentOrReply>('Comment', commentSchema, 'comments')) as Model<CommentOrReply>;

export default CommentModel;
