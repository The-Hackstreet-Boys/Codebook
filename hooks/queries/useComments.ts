import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';

import { Comment } from '../../models/comment';
import { User } from '../../models/user';

export interface ExtendedComment extends Omit<Comment, 'author' | 'post'> {
  author: User;
  hasLiked: boolean;
  post: string;
}

interface Data {
  data: ExtendedComment[];
  limit: number;
  page: number;
  totalPages: number;
}

const getComments = async (limit: number, page: number, postId: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts/${postId}/comments`, {
    params: { limit, page },
  });

  const data = response.data;
  return data;
};

const useComments = (postId: string, limit = 5) => {
  const { user } = useUser();

  return useInfiniteQuery<Data>(
    ['comments', postId, limit],
    ({ pageParam }) => {
      return getComments(limit, pageParam, postId);
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
