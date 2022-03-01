import { FC } from 'react';

import { ExtendedComment } from '../../hooks/queries/useComments';
import useReplies from '../../hooks/queries/useReplies';
import CommentCard from '../CommentCard';
import ReplyForm from '../ReplyForm';
import Box, { Flexbox } from '../elements/Box';
import Typography from '../elements/Typography';

interface Props {
  comment: ExtendedComment;
}

const RepliesList: FC<Props> = ({ comment }) => {
  const { data, fetchNextPage, hasNextPage } = useReplies(comment);

  return (
    <Flexbox direction="column" gap="1rem" marginBottom="1rem">
      <ReplyForm comment={comment} />
      {!!data?.pages[0]?.data.length && (
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
