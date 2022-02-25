import { FC } from 'react';

import useComments from '../../hooks/queries/useComments';
import CommentDisplay from '../CommentDisplay';
import CommentForm from '../CommentForm';
import Button from '../elements/Button';

interface Props {
  postId: string;
}

const CommentsList: FC<Props> = ({ postId }) => {
  const { data, fetchNextPage } = useComments(postId);

  return (
    <>
      {data?.pages.map((page) => (
        <>
          {page.data.map((comment) => (
            <CommentDisplay comment={comment} key={comment._id} />
          ))}
        </>
      ))}
      <Button size="sm" onClick={() => fetchNextPage()}>
        Fetch more...
      </Button>
      <CommentForm postId={postId} />
    </>
  );
};

export default CommentsList;
