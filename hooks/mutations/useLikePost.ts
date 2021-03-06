import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const likePost = async (postId: string) => {
  await axios.post(`/api/posts/${postId}/like`);
};

const updateQueryCache = (queryClient: QueryClient, postId: string) => {
  queryClient.invalidateQueries(['post', postId]);
};

const useLikePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => likePost(postId), {
    onSuccess: () => updateQueryCache(queryClient, postId),
  });
};

export default useLikePost;
