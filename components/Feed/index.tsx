import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import usePosts from '../../hooks/queries/usePosts';
import PostCard from '../PostCard';
import PostCardSkeleton from '../PostCard/skeleton';
import { Flexbox } from '../elements/Box';
import Color from '../elements/Color';
import Typography from '../elements/Typography';

interface Props {
  author?: string;
  onlySavedPosts?: boolean;
}

const Feed: FC<Props> = ({ author, onlySavedPosts }) => {
  const limit = 10;
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = usePosts(
    author,
    limit,
    onlySavedPosts,
  );
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isError) {
    return (
      <Flexbox alignItems="center" justifyContent="center" padding="5rem">
        <Typography variant="h6">
          <Color color="secondary">Error fetching posts</Color>
        </Typography>
      </Flexbox>
    );
  }

  if (isLoading) {
    return (
      <Flexbox direction="column" gap="1rem" ref={ref}>
        {[...Array(limit)].map((_, index) => (
          <PostCardSkeleton key={index} />
        ))}
      </Flexbox>
    );
  }

  return (
    <Flexbox direction="column" gap="1rem">
      {data?.pages.map((page) => (
        <>
          {page.data.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </>
      ))}
      <Flexbox direction="column" gap="1rem" ref={ref}>
        {hasNextPage && [...Array(limit)].map((_, index) => <PostCardSkeleton key={index} />)}
      </Flexbox>
    </Flexbox>
  );
};

export default Feed;
