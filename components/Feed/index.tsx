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

// Use posts query is imported into feed
// Post display components is imported into feed
// Use comment query is imported into postdisplay
// commmentdisplay query is imported into postdisplay