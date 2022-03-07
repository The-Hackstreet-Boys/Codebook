import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

import { Post } from '@/models/post';

const deletePost = async (postId: string) => {
  const { origin } = window.location;
  const response = await axios.delete<Post>(`${origin}/api/posts/${postId}`);

  const deletedPost = response.data;
  return deletedPost;
};

const updateQueryCache = (queryClient: QueryClient) => {
  queryClient.invalidateQueries(['posts']);
};

const useDeletePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => deletePost(postId), {
    onSuccess: () => updateQueryCache(queryClient),
  });
};

export default useDeletePost;
