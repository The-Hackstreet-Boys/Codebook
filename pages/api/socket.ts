import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { Server } from 'http';
import { NextApiRequest } from 'next';
import { Server as IO } from 'socket.io';

import { NewMessage } from '@/contexts/ChatContext';
import authentication from '@/middleware/authentication';
import connectToDatabase from '@/middleware/connectToDatabase';
import MessageModel from '@/models/message';
import { NextApiResponseServerIO } from '@/types/next';

const handler = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (res.socket.server.io) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const httpServer = res.socket.server as unknown as Server;
    const io = new IO(httpServer, {
      path: '/api/socket',
    });
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      const roomId = socket.handshake.query.roomId as string;
      console.log('client connected', roomId);
      socket.join(roomId);
    });
  }
  res.end();
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
