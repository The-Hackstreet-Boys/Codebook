import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import usePosts from '../../hooks/queries/usePosts';
import PostCard from '../PostCard';

interface Props {
  author?: string;
}

const Feed: FC<Props> = ({ author }) => {
  const { data, fetchNextPage } = usePosts(author);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      {data?.pages.map((page) => (
        <>
          {page.data.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </>
      ))}
      <div ref={ref}></div>
    </>
  );
};

export default Feed;
