import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const savePost = async (postId: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/posts/${postId}/save`);
};

const updateQueryCache = (queryClient: QueryClient) => {
  queryClient.invalidateQueries(['posts']);
};

const useSavePost = (postId: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => savePost(postId), {
    onSuccess: () => updateQueryCache(queryClient),
  });
};

export default useSavePost;
