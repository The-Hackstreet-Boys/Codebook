import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const likePost = async (postId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/posts/${postId}/like`);
};

const onSuccess = (queryClient: QueryClient) => {
  queryClient.invalidateQueries(['posts']);
};

const useLikePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => likePost(postId), {
    onSuccess: () => onSuccess(queryClient),
  });
};

export default useLikePost;
