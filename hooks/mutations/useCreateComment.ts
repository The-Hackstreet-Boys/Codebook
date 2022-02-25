import axios from 'axios';
import { useMutation } from 'react-query';

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

const useCreateComment = (onSuccess: () => void, postId: string) => {
  return useMutation(
    (newComment: NewComment) => createComment(newComment, postId),
    {
      onSuccess,
    },
  );
};

export default useCreateComment;
