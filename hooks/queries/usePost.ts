import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { QueryClient, useQuery, useQueryClient } from 'react-query';

import { ExtendedPost } from '@/models/post';

const getPost = async (postId: string) => {
  const response = await axios.get(`/api/posts/${postId}`);

  const data = response.data;
  return data;
};

const onError = (queryClient: QueryClient) => {
  queryClient.invalidateQueries(['posts']);
};

const usePost = (postId: string, initialData?: ExtendedPost) => {
  const { user } = useAuth0User();
  const queryClient = useQueryClient();

  return useQuery<ExtendedPost>(
    ['post', postId],
    () => {
      return getPost(postId);
    },
    {
      enabled: !!user,
      refetchInterval: 15000,
      onError: () => onError(queryClient),
      initialData,
    },
  );
};

export default usePost;
