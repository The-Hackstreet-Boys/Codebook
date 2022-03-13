import axios from 'axios';
import dayjs from 'dayjs';
import Pusher from 'pusher-js';
import React, { FC, createContext, useContext, useEffect, useState } from 'react';

import { ExtendedMessage, Message } from '@/models/message';
import { User } from '@/models/user';

interface State {
  sendMessage: (newMessage: NewMessage) => Promise<Message>;
  messages: ExtendedMessage[];
  groupedMessages: GroupedMessages[];
}

export interface NewMessage {
  text: string;
}

export interface GroupedMessages {
  date: Date;
  userGroupedMessages: {
    user: User;
    messages: ExtendedMessage[];
  }[];
}

interface Props {
  roomId: string;
}

const ChatContext = createContext<State>({} as State);

export const ChatProvider: FC<Props> = ({ roomId, children }) => {
  const [messages, setMessages] = useState<ExtendedMessage[]>([]);
  const [groupedMessages, setGroupedMessages] = useState<GroupedMessages[]>([]);

  useEffect(() => {
    const updateMessages = async () => {
      try {
        const response = await axios.get(`/api/chat-rooms/${roomId}/messages`);

        setMessages(response.data);
      } catch (e) {
        console.log('Error fetching messages!');
      }
    };
    updateMessages();
  }, [roomId]);

  useEffect(() => {
    if (!messages || messages.length === 0) {
      setGroupedMessages([]);
      return;
    }

    const firstMsg = messages[0];

    const newGroupedMessages = messages.slice(1).reduce(
      (acc, message) => {
        const lastTimeGroupedMessage = acc[acc.length - 1];
        if (dayjs(message.createdAt).diff(lastTimeGroupedMessage.date, 'minute') > 15) {
          acc.push({
            date: message.createdAt,
            userGroupedMessages: [{ user: message.author, messages: [message] }],
          });
        } else {
          const lastUserGroupedMessage =
            lastTimeGroupedMessage.userGroupedMessages[
              lastTimeGroupedMessage.userGroupedMessages.length - 1
            ];
          if (lastUserGroupedMessage.user._id !== message.author._id) {
            lastTimeGroupedMessage.userGroupedMessages.push({
              user: message.author,
              messages: [message],
            });
          } else {
            lastUserGroupedMessage.messages.push(message);
          }
        }
        return acc;
      },
      [
        {
          date: firstMsg.createdAt,
          userGroupedMessages: [{ user: firstMsg.author, messages: [firstMsg] }],
        },
      ],
    );

    setGroupedMessages(newGroupedMessages);
  }, [messages]);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_PUBLIC_KEY as string, {
      cluster: 'eu',
    });

    const channel = pusher.subscribe(roomId);

    channel.bind('message', (message: ExtendedMessage) => {
      setMessages((prevState) => [...prevState, message]);
    });

    return () => {
      pusher.unsubscribe(roomId);
    };
  }, [roomId]);

  const sendMessage = async (newMessage: NewMessage) => {
    const response = await axios.post<Message>(`/api/chat-rooms/${roomId}/messages`, newMessage);
    return response.data;
  };

  return (
    <ChatContext.Provider value={{ sendMessage, messages, groupedMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => useContext(ChatContext);

export default useChat;
