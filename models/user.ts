import mongoose, { Document, Schema, model } from 'mongoose';

export interface User extends Document {
  username: string;
  displayName: string;
  avatarURL: string;
  email?: string;
  phoneNumber?: string;
}

const userSchema = new Schema<User>(
  {
    _id: String,
    username: {
      required: true,
      type: String,
      unique: true,
      maxlength: 20,
      trim: true,
      lowercase: true,
    },
    displayName: {
      required: true,
      type: String,
      maxlength: 50,
      trim: true,
    },
    avatarURL: {
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
    phoneNumber: {
      type: String,
      maxlength: 20,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.User || model<User>('User', userSchema, 'users');
