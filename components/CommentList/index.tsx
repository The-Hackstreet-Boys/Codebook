import { FC } from 'react';

import useComments from '../../hooks/queries/useComments';
import CommentCard from '../CommentCard';
import CommentForm from '../CommentForm';
import { Flexbox } from '../elements/Box';
import Button from '../elements/Button';

interface Props {
  postId: string;
}

const CommentsList: FC<Props> = ({ postId }) => {
  const { data, fetchNextPage } = useComments(postId);

  return (
    <Flexbox direction="column" gap="0.75rem" margin="1rem 0">
      {data?.pages.map((page) => (
        <>
          {page.data.map((comment) => (
            <CommentCard comment={comment} key={comment._id} />
          ))}
        </>
      ))}
      <Button size="sm" onClick={() => fetchNextPage()}>
        View more comments...
      </Button>
      <CommentForm postId={postId} />
    </Flexbox>
  );
};

export default CommentsList;
