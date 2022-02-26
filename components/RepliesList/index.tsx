import { FC } from 'react';

import useReplies from '../../hooks/queries/useReplies';
import ReplyCard from '../ReplyCard';
import ReplyForm from '../ReplyForm';
import Box, { Flexbox } from '../elements/Box';
import Typography from '../elements/Typography';

interface Props {
  postId: string;
  commentId: string;
  commentAuthorName: string;
}

const RepliesList: FC<Props> = ({ postId, commentId, commentAuthorName }) => {
  const { data, fetchNextPage, hasNextPage } = useReplies(postId, commentId);

  return (
    <Flexbox direction="column" gap="1rem">
      <ReplyForm
        postId={postId}
        commentId={commentId}
        commentAuthorName={commentAuthorName}
      />
      <Flexbox direction="column" gap="1rem">
        {data?.pages.map((page) => (
          <>
            {page.data.map((reply) => (
              <ReplyCard reply={reply} key={reply._id} />
            ))}
          </>
        ))}
      </Flexbox>
      {hasNextPage && (
        <Box onClick={() => fetchNextPage()} width="fit-content">
          <Typography isClickable>View more replies...</Typography>
        </Box>
      )}
    </Flexbox>
  );
};

export default RepliesList;
