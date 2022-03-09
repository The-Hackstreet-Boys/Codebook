import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { ExtendedChatRoom } from '@/models/chatRoom';

const getChatRooms = async () => {
  const response = await axios.get('/api/chat-rooms');

  const data = response.data;
  return data;
};

const useChatRooms = () => {
  const { user } = useAuth0User();

  return useQuery<ExtendedChatRoom[]>(
    ['chatRooms'],
    () => {
      return getChatRooms();
    },
    {
      enabled: !!user,
    },
  );
};

export default useChatRooms;
