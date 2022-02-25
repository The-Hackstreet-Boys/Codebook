import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

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
  createdAt: Date;
  updatedAt: Date;
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
  },
  { timestamps: true },
);

export default (mongoose.models.User ||
  model<User>('User', userSchema, 'users')) as Model<User>;
