import 'next';

import { User } from '@/models/user';

declare module 'next' {
  export interface NextApiRequest {
    user: User;
  }
}
