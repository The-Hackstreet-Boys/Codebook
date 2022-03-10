import mongoose, { Document, Model, Schema, Types, model } from 'mongoose';
import { Message } from './message';

import { User } from './user';

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

export interface ExtendedPrivateChatRoom extends Omit<PrivateChatRoom, 'participants'> {
  participants: User[];
  otherUser: User;
  lastMessage: Message | null;
}

export interface ExtendedGroupChatRoom extends Omit<GroupChatRoom, 'participants'> {
  participants: User[];
  lastMessage: Message | null;

}

export type ExtendedChatRoom = ExtendedPrivateChatRoom | ExtendedGroupChatRoom;

const chatRoomSchema = new Schema<ChatRoom>(
  {
    type: { required: true, type: String, enum: ['private', 'group'] },
    participants: { required: true, type: [String], ref: 'User' },
    lastActiveAt: {
      type: Date,
      default: Date.now,
    },
    name: String,
    image: { url: String, width: Number, height: Number },
  },

  { timestamps: true },
);

const ChatRoomModel = (mongoose.models.ChatRoom ??
  model<ChatRoom>('ChatRoom', chatRoomSchema, 'chatRooms')) as Model<ChatRoom>;

export default ChatRoomModel;
