import { NextApiRequest } from 'next';
import { Server } from 'socket.io';

import { NextApiResponseServerIO } from '@/types/next';

const handler = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('client connected');

      socket.on('message', (message) => {
        console.log('message', message);
        // save message to db
        io.emit('message', message);
      });
    });
  }
  res.end();
};

export default handler;
