import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const follow = async (userId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/users/${userId}/follow`);
};

const unfollow = async (userId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/users/${userId}/unfollow`);
};

const onSuccess = (queryClient: QueryClient, userId: string) => {
  queryClient.invalidateQueries(['user', userId]);
  queryClient.invalidateQueries(['contacts']);
};

const useChangeFollowStatus = (userId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (shouldUnfollow: boolean | undefined = false) =>
      shouldUnfollow ? unfollow(userId) : follow(userId),
    {
      onSuccess: () => onSuccess(queryClient, userId),
    },
  );
};

export default useChangeFollowStatus;
