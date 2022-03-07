import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { ExtendedComment, ExtendedReply } from '@/models/comment';

interface Data {
  data: ExtendedReply[];
  limit: number;
  page: number;
  pageCount: number;
}

const getReplies = async (limit: number, page: number, comment: ExtendedComment) => {
  const { origin } = window.location;

  const response = await axios.get(
    `${origin}/api/posts/${comment.post}/comments/${comment._id}/replies`,
    {
      params: { limit, page },
    },
  );

  const data = response.data;
  return data;
};

const useReplies = (comment: ExtendedComment, limit = 5) => {
  const { user } = useAuth0User();

  return useInfiniteQuery<Data>(
    ['replies', comment._id, limit],
    ({ pageParam = 1 }) => {
      return getReplies(limit, pageParam, comment);
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

export default useReplies;
