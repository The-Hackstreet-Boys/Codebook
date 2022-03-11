import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { ChatRoom } from '@/models/chatRoom';
import { User } from '@/models/user';

const createChatRoom = async (participants: User[]) => {
  const response = await axios.post<ChatRoom>(`/api/chat-rooms`, { type: 'group', participants });

  const createdChatRoom = response.data;
  return createdChatRoom;
};

const updateQueryCache = (queryClient: QueryClient) => {
  queryClient.invalidateQueries(['chatRooms']);
};

const useCreateChatRoom = (onSuccess: (createdChatRoom: ChatRoom) => void) => {
  const queryClient = useQueryClient();

  return useMutation((participants: User[]) => createChatRoom(participants), {
    onSuccess: (createdChatRoom: ChatRoom) => {
      updateQueryCache(queryClient);
      onSuccess(createdChatRoom);
    },
  });
};

export default useCreateChatRoom;
