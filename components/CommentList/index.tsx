import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import useComments from '../../hooks/queries/useComments';
import CommentDisplay from '../CommentDisplay';

interface Props {
  postId: string;
}

const CommentsList: FC<Props> = ({ postId }) => {
  const { data, fetchNextPage } = useComments(postId);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);
  return (
    <>
      {data?.pages.map((page) => (
        <>
          {page.data.map((comment) => (
            <CommentDisplay comment={comment} key={comment._id} />
          ))}
        </>
      ))}
      <div ref={ref}></div>
    </>
  );
};

export default CommentsList;