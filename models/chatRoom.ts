import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';

import { User } from '@/models/user';

interface BaseChatRoom extends Document {
  participants: string[];
  lastActiveAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PrivateChatRoom extends BaseChatRoom {
  type: 'private';
  
}

export interface GroupChatRoom extends BaseChatRoom {
  type: 'group';
  name?: string;
  image?: { url: string; width: number; height: number };
  
}

export type ChatRoom = PrivateChatRoom | GroupChatRoom;



const chatRoomSchema = new Schema<ChatRoom>(
  {
    type: { required: true, type: String, enum: ['private', 'group'] },
    participants: { required: true, type:[String], ref: 'User' },
   lastActiveAt: {required: true, type: Date},
   name: String,
   image: { url: String, width: Number, height: Number },
    },
    
  { timestamps: true },
);

const ChatRoomModel = (mongoose.models.ChatRoom ??
  model<ChatRoom>('ChatRoom', chatRoomSchema, 'chatRooms')) as Model<ChatRoom>;

export default ChatRoomModel;
