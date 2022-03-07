import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { ExtendedComment, ExtendedReply } from '@/models/comment';

const likeComment = async (comment: ExtendedComment | ExtendedReply) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/comments/${comment._id}/like`);
};

const updateQueryCache = (queryClient: QueryClient, comment: ExtendedComment | ExtendedReply) => {
  switch (comment.type) {
    case 'comment':
      queryClient.invalidateQueries(['comments', comment.post]);
      break;
    case 'reply':
      queryClient.invalidateQueries(['replies', comment.comment]);
      break;
  }
};

const useLikeComment = (comment: ExtendedComment | ExtendedReply) => {
  const queryClient = useQueryClient();

  return useMutation(() => likeComment(comment), {
    onSuccess: () => updateQueryCache(queryClient, comment),
  });
};

export default useLikeComment;
