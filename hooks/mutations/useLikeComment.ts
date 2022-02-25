import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const likeComment = async (postId: string, commentId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/posts/${postId}/comments/${commentId}/like`);
};

const updateQueryCache = (queryClient: QueryClient, postId: string) => {
  queryClient.invalidateQueries(['comments', postId]);
};

const useLikeComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => likeComment(postId, commentId), {
    onSuccess: () => updateQueryCache(queryClient, postId),
  });
};

export default useLikeComment;
