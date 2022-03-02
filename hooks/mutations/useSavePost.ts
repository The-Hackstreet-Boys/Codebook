import axios from 'axios';
import { QueryClient, useMutation, useQueryClient } from 'react-query';

const savePost = async (savedPost: string) => {
  const { origin } = window.location;
  await axios.post(`${origin}/api/users/me/saved-posts`);
};

const updateQueryCache = (queryClient: QueryClient, savedPost: string) => {
  queryClient.invalidateQueries(['saved-post', savedPost]);
};

const useSavePost = (savedPost: string) => {
  const queryClient = useQueryClient();

  return useMutation(() => savePost(savedPost), {
    onSuccess: () => updateQueryCache(queryClient, savedPost),
  });
};

export default useSavePost;
