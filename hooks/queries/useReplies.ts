import { useUser } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

import { Reply } from '../../models/comment';
import { User } from '../../models/user';
import { ExtendedComment } from './useComments';

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
  const { user } = useUser();

  return useInfiniteQuery<Data>(
    ['replies', comment._id, limit],
    ({ pageParam }) => {
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
