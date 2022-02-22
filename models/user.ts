import mongoose, { Document, Model, Schema, model } from 'mongoose';

export interface User extends Document {
  name: string;
  picture: string;
  email?: string;
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
  },
  { timestamps: true },
);

export default (mongoose.models.User ||
  model<User>('User', userSchema, 'users')) as Model<User>;
