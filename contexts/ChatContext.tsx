import axios from 'axios';
import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

import { Message } from '@/models/message';

interface State {
  connected: boolean;
  socket?: Socket;
  sendMessage: (newMessage: NewMessage) => Promise<Message>;
  messages: Message[];
}

interface NewMessage {
  text: string;
}

const ChatContext = createContext<State>({} as State);

export const SocketProvider: FC = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState<Socket>();
  const [roomId, setRoomId] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await axios.get('/api/socket');
    const newSocket = io();

    newSocket.on('connect', () => {
      console.log('connected');
      setConnected(true);
    });

    newSocket.on('message', (message: Message) => {
      setMessages((old) => [...old, message]);
    });

    setSocket(newSocket);
  };

  const sendMessage = async (newMessage: NewMessage) => {
    const response = await axios.post<Message>(`/api/chat-rooms/${roomId}/messages`, newMessage);
    return response.data;
  };

  return (
    <ChatContext.Provider value={{ connected, socket, sendMessage, messages }}>
      {children}
    </ChatContext.Provider>
  );
};

const useChat = () => useContext(ChatContext);

export default useChat;
