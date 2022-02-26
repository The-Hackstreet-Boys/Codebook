import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Reply } from '../../models/comment';

export interface NewReply {
  text: string;
}

const createReply = async (
  newReply: NewReply,
  postId: string,
  commentId: string,
) => {
  const { origin } = window.location;
  const response = await axios.post<Reply>(
    `${origin}/api/posts/${postId}/comments/${commentId}/replies`,
    newReply,
  );

  const createdReply = response.data;
  return createdReply;
};

const updateQueryCache = (queryClient: QueryClient, commentId: string) => {
  queryClient.invalidateQueries(['replies', commentId]);
};

const useCreateReply = (
  onSuccess: () => void,
  postId: string,
  commentId: string,
) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newReply: NewReply) => createReply(newReply, postId, commentId),
    {
      onSuccess: () => {
        updateQueryCache(queryClient, commentId);
        onSuccess();
      },
    },
  );
};

export default useCreateReply;
