import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const like = async (postId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/posts/${postId}/like`);
};

const unlike = async (postId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/posts/${postId}/unlike`);
};

const onSuccess = (queryClient: QueryClient, postId: string) => {
  // queryClient.invalidateQueries(['post', postId]);
  // queryClient.invalidateQueries(['contacts']);
};

const useChangeLikeStatus = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (shouldUnlike: boolean | undefined = false) =>
      shouldUnlike ? unlike(postId) : like(postId),
    {
      onSuccess: () => onSuccess(queryClient, postId),
    },
  );
};

export default useChangeLikeStatus;
