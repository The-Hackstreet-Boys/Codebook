import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { Post } from '@/models/post';
import { Tag } from '@/models/tag';

export interface User extends Document {
  name: string;
  picture: string;
  email?: string;
  about?: string;
  isOpenToCollaborate: boolean;
  followers: string[];
  following: string[];
  savedPosts: Types.ObjectId[];
  tags: Types.ObjectId[];
  lastActiveAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExtendedUser extends Omit<User, 'savedPosts' | 'tags'> {
  savedPosts: Post[];
  tags: Tag[];
  isFollowing: boolean;
  isFollowingYou: boolean;
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
      default: true,
    },
    followers: {
      type: [String],
      ref: 'User',
    },
    following: {
      type: [String],
      ref: 'User',
    },
    savedPosts: {
      type: [Schema.Types.ObjectId],
      ref: 'Post',
    },
    tags: {
      type: [Schema.Types.ObjectId],
      ref: 'Tag',
    },
    lastActiveAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

const UserModel = (mongoose.models.User ?? model<User>('User', userSchema, 'users')) as Model<User>;

export default UserModel;
