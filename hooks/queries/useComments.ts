import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { ExtendedComment } from '@/models/comment';

interface Data {
  data: ExtendedComment[];
  limit: number;
  page: number;
  pageCount: number;
}

const getComments = async (limit: number, page: number, postId: string) => {
  const response = await axios.get(`/api/posts/${postId}/comments`, {
    params: { limit, page },
  });

  const data = response.data;
  return data;
};

const useComments = (postId: string, limit = 5) => {
  const { user } = useAuth0User();

  return useInfiniteQuery<Data>(
    ['comments', postId, limit],
    ({ pageParam = 1 }) => {
      return getComments(limit, pageParam, postId);
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

export default useComments;
