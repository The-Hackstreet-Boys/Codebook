import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { CommentOrReply } from '../../models/comment';

const deleteComment = async (commentId: string) => {
  const { origin } = window.location;
  const response = await axios.delete<CommentOrReply>(`${origin}/api/comments/${commentId}`);

  const deletedComment = response.data;
  return deletedComment;
};

const updateQueryCache = (queryClient: QueryClient, deletedComment: CommentOrReply) => {
  if (deletedComment.type === 'reply')
    queryClient.invalidateQueries(['replies', deletedComment.comment]);
  if (deletedComment.type === 'comment')
    queryClient.invalidateQueries(['comments', deletedComment.post]);
};

const useDeleteComment = (commentId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => deleteComment(commentId), {
    onSuccess: (deletedComment: CommentOrReply) => updateQueryCache(queryClient, deletedComment),
  });
};

export default useDeleteComment;
