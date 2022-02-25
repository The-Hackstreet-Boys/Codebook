import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const followUser = async (userId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/users/${userId}/follow`);
};

const onSuccess = (queryClient: QueryClient, userId: string) => {
  queryClient.invalidateQueries(['user', userId]);
  queryClient.invalidateQueries(['contacts']);
};

const useFollowUser = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => followUser(userId), {
    onSuccess: () => onSuccess(queryClient, userId),
  });
};

export default useFollowUser;
