import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest } from 'next';
import { Server } from 'socket.io';

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
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('client connected');
      const roomId = socket.handshake.query.roomId as string;
      socket.join(roomId);
    });
  }
  res.end();
};

export default withApiAuthRequired(connectToDatabase(authentication(handler)));
