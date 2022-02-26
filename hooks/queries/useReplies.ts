import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { Reply } from '../../models/comment';
import { User } from '../../models/user';

export interface ExtendedReply extends Omit<Reply, 'author' | 'comment'> {
  author: User;
  hasLiked: boolean;
  comment: string;
}

interface Data {
  data: ExtendedReply[];
  limit: number;
  page: number;
  pageCount: number;
}

const getReplies = async (
  limit: number,
  page: number,
  postId: string,
  commentId: string,
) => {
  const { origin } = window.location;

  const response = await axios.get(
    `${origin}/api/posts/${postId}/comments/${commentId}/replies`,
    {
      params: { limit, page },
    },
  );

  const data = response.data;
  return data;
};

const useReplies = (postId: string, commentId: string, limit = 5) => {
  const { user } = useUser();

  return useInfiniteQuery<Data>(
    ['replies', commentId, limit],
    ({ pageParam }) => {
      return getReplies(limit, pageParam, postId, commentId);
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
