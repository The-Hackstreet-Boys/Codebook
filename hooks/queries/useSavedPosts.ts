import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { Post } from '../../models/post';
import { ExtendedUser } from './useUser';

export interface ExtendedSavedPost extends Omit<Post, 'author'> {
  author: ExtendedUser;
  hasLiked: boolean;
  hasSaved: boolean;
}

interface Data {
  data: ExtendedSavedPost[];
  limit: number;
  page: number;
  pageCount: number;
}

const getSavedPosts = async (limit: number, page: number, author?: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/users/me/saved-posts`);

  const data = response.data;
  return data;
};

const useSavedPosts = (author?: string, limit = 20) => {
  const { user } = useAuth0User();

  return useInfiniteQuery<Data>(
    ['saved-posts', author, limit],
    ({ pageParam }) => {
      return getSavedPosts(limit, pageParam, author);
    },
    {
      enabled: !!user,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.pageCount) return lastPage.page + 1;
        return undefined;
      },
    },
  );
};

export default useSavedPosts;
