import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { Post } from '../../models/post';
import { User } from '../../models/user';

export interface SharedPost extends Omit<Post, 'author'> {
    author: User;
    hasLiked: boolean;
    hasSaved: boolean;
  }

const getSharedPost = async (postId: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts/${postId}`);

  const data = response.data;
  return data;
};

const useSharedPost = (postId: string) => {
  const { user } = useAuth0User();

  return useQuery<SharedPost>(
    ['post', postId],
    () => {
      return getSharedPost(postId);
    },
    {
      enabled: !!user,
      refetchInterval: 15000,
    },
  );
};

export default useSharedPost;
