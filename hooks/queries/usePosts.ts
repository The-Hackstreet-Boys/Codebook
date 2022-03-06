import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { ExtendedPost } from '@/models/post';

interface Data {
  data: ExtendedPost[];
  limit: number;
  page: number;
  pageCount: number;
}

const getPosts = async (
  limit: number,
  page: number,
  author?: string,
  tag?: string,
  onlySavedPosts?: boolean,
) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts`, {
    params: { limit, page, author, tag, onlySavedPosts },
  });

  const data = response.data;
  return data;
};

const usePosts = (author?: string, tag?: string, onlySavedPosts?: boolean, limit = 20) => {
  const { user } = useAuth0User();

  return useInfiniteQuery<Data>(
    ['posts', author, tag, onlySavedPosts, limit],
    ({ pageParam = 1 }) => {
      return getPosts(limit, pageParam, author, tag, onlySavedPosts);
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

export default usePosts;
