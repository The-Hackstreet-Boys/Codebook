import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { Post } from '../../models/post';
import { Tag } from '../../models/tag';
import { User } from '../../models/user';

export interface ExtendedUser extends Omit<User, 'savedPosts' | 'tags'> {
  savedPosts: Post[];
  tags: Tag[];
  isFollowing: boolean;
  isFollowingYou: boolean;
}

const getUser = async (userId: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/users/${userId}`);

  const data = response.data;
  return data;
};

const useUser = (userId: string) => {
  const { user } = useAuth0User();

  return useQuery<ExtendedUser>(
    ['user', userId],
    () => {
      return getUser(userId);
    },
    {
      enabled: !!user,
    },
  );
};

export default useUser;
