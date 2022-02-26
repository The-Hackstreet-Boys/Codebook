import { FC } from 'react';

import useComments from '../../hooks/queries/useComments';
import CommentCard from '../CommentCard';
import CommentForm from '../CommentForm';
import Box, { Flexbox } from '../elements/Box';
import Typography from '../elements/Typography';

interface Props {
  postId: string;
}

const CommentsList: FC<Props> = ({ postId }) => {
  const { data, fetchNextPage, hasNextPage } = useComments(postId);

  return (
    <Flexbox direction="column" gap="1rem">
      <CommentForm postId={postId} />
      {!!data?.pages[0]?.data.length && (
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
