import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Comment } from '../../models/comment';

export interface NewComment {
  text: string;
}

const createComment = async (newComment: NewComment, postId: string) => {
  const { origin } = window.location;
  const response = await axios.post<Comment>(
    `${origin}/api/posts/${postId}/comments`,
    newComment,
  );

  const createdComment = response.data;
  return createdComment;
};

const updateQueryCache = (queryClient: QueryClient, postId: string) => {
  queryClient.invalidateQueries(['comments', postId]);
};

const useCreateComment = (onSuccess: () => void, postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(
    (newComment: NewComment) => createComment(newComment, postId),
    {
      onSuccess: () => {
        updateQueryCache(queryClient, postId);
        onSuccess();
      },
    },
  );
};

export default useCreateComment;
