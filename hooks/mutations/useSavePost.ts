import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const savePost = async (postId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/posts/${postId}/save`);
};

const updateQueryCache = (queryClient: QueryClient, postId: string) => {
  queryClient.invalidateQueries(['post', postId]);
  queryClient.invalidateQueries(['posts']);
};

const useSavePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => savePost(postId), {
    onSuccess: () => updateQueryCache(queryClient, postId),
  });
};

export default useSavePost;
