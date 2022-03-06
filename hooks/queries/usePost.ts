import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { ExtendedPost } from '@/models/post';

const getPost = async (postId: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts/${postId}`);

  const data = response.data;
  return data;
};

const usePost = (postId: string) => {
  const { user } = useAuth0User();

  return useQuery<ExtendedPost>(
    ['post', postId],
    () => {
      return getPost(postId);
    },
    {
      enabled: !!user,
      refetchInterval: 15000,
    },
  );
};

export default usePost;
