import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

import { Post } from '../../models/post';

interface Data {
  data: Post[];
  limit: number;
  page: number;
  totalPages: number;
}

const getPosts = async (limit: number, page: number, author?: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts`, {params: {limit, page, author}});

  const data = response.data;
  return data;
};


const usePosts = (author? : string, limit = 20) => {
  const { user } = useUser();

  return useInfiniteQuery<Data>(

    ['posts', limit, author],
    ({pageParam}) => {
      return getPosts(limit, pageParam, author);

    },
    {
      enabled: !!user,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) return lastPage.page + 1;
        return undefined;
      },
    },
  );
};

export default usePosts;
