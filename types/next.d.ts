import 'next';

import { User } from '../models/user';

declare module 'next' {
  export interface NextApiRequest {
    user: User;
  }
}

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer;
    };
  };
};
