import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const likeComment = async (commentId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/comments/${commentId}/like`);
};

const updateQueryCache = (queryClient: QueryClient, postId: string) => {
  queryClient.invalidateQueries(['comments', postId]);
};

const useLikeComment = (postId: string, commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => likeComment(commentId), {
    onSuccess: () => updateQueryCache(queryClient, postId),
  });
};

export default useLikeComment;
