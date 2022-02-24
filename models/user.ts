import mongoose, { Document, Model, Schema, model } from 'mongoose';

import { Post } from './post';
import { Tag } from './tag';

export interface User extends Document {
  name: string;
  picture: string;
  email?: string;
  about?: string;
  isOpenToCollaborate: boolean;
  followers: User[];
  following: User[];
  savedPosts: Post[];
  tags: Tag[];
}

const userSchema = new Schema<User>(
  {
    _id: String,
    name: {
      required: true,
      type: String,
      maxlength: 50,
      trim: true,
    },
    picture: {
      required: true,
      type: String,
      maxlength: 250,
      trim: true,
    },
    email: {
      type: String,
      maxlength: 50,
      trim: true,
      lowercase: true,
    },
    about: {
      type: String,
      maxlength: 250,
      trim: true,
    },
    isOpenToCollaborate: {
      type: Boolean,
      required: true,
      default: true,
    },
    followers: {
      required: true,
      type: [String],
      ref: 'User',
    },
    following: {
      required: true,
      type: [String],
      ref: 'User',
    },
    savedPosts: {
      required: true,
      type: [Schema.Types.ObjectId],
      ref: 'Post',
    },
    tags: {
      required: true,
      type: [Schema.Types.ObjectId],
      ref: 'Tag',
    },
  },
  { timestamps: true },
);

export default (mongoose.models.User ||
  model<User>('User', userSchema, 'users')) as Model<User>;
