import { FC } from 'react';

import CommentCard from '@/components/CommentCard';
import CommentForm from '@/components/CommentForm';
import Box, { Flexbox } from '@/components/elements/Box';
import Typography from '@/components/elements/Typography';
import useComments from '@/hooks/queries/useComments';

interface Props {
  postId: string;
}

const CommentsList: FC<Props> = ({ postId }) => {
  const { data, fetchNextPage, hasNextPage } = useComments(postId);
  const hasComments = !!data?.pages[0]?.data.length;

  return (
    <Flexbox direction="column" gap="1rem">
      <CommentForm postId={postId} />
      {hasComments && (
        <>
          <Flexbox direction="column" gap="1rem">
            {data?.pages.map((page) => (
              <>
                {page.data.map((comment) => (
                  <CommentCard comment={comment} key={comment._id} />
                ))}
              </>
            ))}
          </Flexbox>
          {hasNextPage && (
            <Box onClick={() => fetchNextPage()} width="fit-content">
              <Typography isClickable>View more comments...</Typography>
            </Box>
          )}
        </>
      )}
    </Flexbox>
  );
};

export default CommentsList;
