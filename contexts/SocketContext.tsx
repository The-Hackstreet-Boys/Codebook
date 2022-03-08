import axios from 'axios';
import React, {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Socket, io } from 'socket.io-client';

interface State {
  connected: boolean;
  socket?: Socket;
}

interface Props {
  setMessages: Dispatch<SetStateAction<string[]>>;
}

const SocketContext = createContext<State>({} as State);

export const SocketProvider: FC<Props> = ({ children, setMessages }) => {
  const [connected, setConnected] = useState(false);
  const [socket, setSocket] = useState<Socket>();

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

    newSocket.on('message', (m) => {
      console.log('message received', m);
      setMessages((old) => [...old, m]);
    });

    setSocket(newSocket);
  };

  return <SocketContext.Provider value={{ connected, socket }}>{children}</SocketContext.Provider>;
};

const useSocket = () => useContext(SocketContext);

export default useSocket;
