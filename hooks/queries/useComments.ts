import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

import { Comment } from '../../models/comment';
import { User } from '../../models/user';

export interface ExtendedComment extends Omit<Comment, 'author'> {
  author: User;
}

interface Data {
  data: ExtendedComment[];
  limit: number;
  page: number;
  totalPages: number;
}

const getComments = async (limit: number, page: number) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts/[postId]/comments`, {
    params: { limit, page, author: 'google-oauth2|116727138907129554811' },
  });

  const data = response.data;
  return data;
};

const useComments = (limit = 10) => {
  const { user } = useUser();

  return useInfiniteQuery<Data>(
    ['comments', limit],
    ({ pageParam }) => {
      return getComments(limit, pageParam);
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

export default useComments;
