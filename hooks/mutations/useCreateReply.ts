import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Reply } from '../../models/comment';
import { ExtendedComment } from '../queries/useComments';

export interface NewReply {
  text: string;
}

const createReply = async (newReply: NewReply, comment: ExtendedComment) => {
  const { origin } = window.location;
  const response = await axios.post<Reply>(
    `${origin}/api/posts/${comment.post}/comments/${comment._id}/replies`,
    newReply,
  );

  const createdReply = response.data;
  return createdReply;
};

const updateQueryCache = (
  queryClient: QueryClient,
  comment: ExtendedComment,
) => {
  queryClient.invalidateQueries(['replies', comment._id]);
};

const useCreateReply = (onSuccess: () => void, comment: ExtendedComment) => {
  const queryClient = useQueryClient();

  return useMutation((newReply: NewReply) => createReply(newReply, comment), {
    onSuccess: () => {
      updateQueryCache(queryClient, comment);
      onSuccess();
    },
  });
};

export default useCreateReply;
