import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { User } from '@/models/user';

export interface Message extends Document {
  author: string;
  room: Schema.Types.ObjectId;
  text: string;
  image?: { url: string; width: number; height: number };
  code?: { text: string; language: string };
  createdAt: Date;
  updatedAt: Date;
}

export interface ExtendedMessage extends Omit<Message, 'author'> {
  author: User;
}

const postSchema = new Schema<Message>(
  {
    author: { required: true, type: String, ref: 'User', index: true },
    room: { required: true, type: Schema.Types.ObjectId, ref: 'ChatRoom', index: true },
    text: { required: true, type: String, maxlength: 10000 },
    image: { url: String, width: Number, height: Number },
    code: { text: String, language: String },
  },
  { timestamps: true },
);

const MessageModel = (mongoose.models.Message ??
  model<Message>('Message', postSchema, 'messages')) as Model<Message>;

export default MessageModel;
