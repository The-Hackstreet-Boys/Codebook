import { FC } from 'react';

import CommentCard from '@/components/CommentCard';
import ReplyForm from '@/components/ReplyForm';
import Box, { Flexbox } from '@/components/elements/Box';
import Typography from '@/components/elements/Typography';
import { ExtendedComment } from '@/hooks/queries/useComments';
import useReplies from '@/hooks/queries/useReplies';

interface Props {
  comment: ExtendedComment;
}

const RepliesList: FC<Props> = ({ comment }) => {
  const { data, fetchNextPage, hasNextPage } = useReplies(comment);
  const hasReplies = !!data?.pages[0]?.data.length;

  return (
    <Flexbox direction="column" gap="1rem" marginBottom="1rem">
      <ReplyForm comment={comment} />
      {hasReplies && (
        <>
          <Flexbox direction="column" gap="1rem">
            {data?.pages.map((page) => (
              <>
                {page.data.map((reply) => (
                  <CommentCard comment={reply} key={reply._id} />
                ))}
              </>
            ))}
          </Flexbox>
          {hasNextPage && (
            <Box onClick={() => fetchNextPage()} width="fit-content">
              <Typography isClickable>View more replies...</Typography>
            </Box>
          )}
        </>
      )}
    </Flexbox>
  );
};

export default RepliesList;
