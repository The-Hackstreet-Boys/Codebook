import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { PrivateChatRoom } from '@/models/chatRoom';

const getPrivateChatRoom = async (userId: string) => {
  const response = await axios.get(`/api/chat-rooms/users/${userId}`);

  const data = response.data;
  return data;
};

const usePrivateChatRoom = (userId: string) => {
  const { user } = useAuth0User();

  return useQuery<PrivateChatRoom>(
    ['privateChatRoom', userId],
    () => {
      return getPrivateChatRoom(userId);
    },
    {
      enabled: !!user,
    },
  );
};

export default usePrivateChatRoom;
