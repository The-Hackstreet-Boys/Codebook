import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { User } from '@/models/user';
import {Code, Image} from './media';

export interface Message extends Document {
  author: string;
  room: Schema.Types.ObjectId;
  text: string;
  image?: Types.ObjectId;
  code?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExtendedMessage extends Omit<Message, 'author' | 'image'|'code'> {
  author: User;
  image?: Image;
  code?: Code;
}

const postSchema = new Schema<Message>(
  {
    author: { required: true, type: String, ref: 'User', index: true },
    room: { required: true, type: Schema.Types.ObjectId, ref: 'ChatRoom', index: true },
    text: { required: true, type: String, maxlength: 10000 },
    image: { type: Schema.Types.ObjectId, ref: 'Media' },
    code: { type: Schema.Types.ObjectId, ref: 'Media' },
  },
  { timestamps: true },
);

const MessageModel = (mongoose.models.Message ??
  model<Message>('Message', postSchema, 'messages')) as Model<Message>;

export default MessageModel;
