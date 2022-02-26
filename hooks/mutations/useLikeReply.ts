import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const likeReply = async (replyId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/comments/${replyId}/like`);
};

const updateQueryCache = (queryClient: QueryClient, commentId: string) => {
  queryClient.invalidateQueries(['replies', commentId]);
  console.log(['replies', commentId]);
};

const useLikeReply = (commentId: string, replyId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => likeReply(replyId), {
    onSuccess: () => updateQueryCache(queryClient, commentId),
  });
};

export default useLikeReply;
