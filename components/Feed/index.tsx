import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import usePosts from '../../hooks/queries/usePosts';
import PostDisplay from '../PostDisplay';

const Feed: FC = () => {
  const { data, fetchNextPage } = usePosts(10);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);
  return (
    <>
      {data?.pages.map((page) => (
        <>
          {page.data.map((post) => (
            <PostDisplay post={post} key={post._id} />
          ))}
        </>
      ))}
      <div ref={ref}></div>
    </>
  );
};

export default Feed;
