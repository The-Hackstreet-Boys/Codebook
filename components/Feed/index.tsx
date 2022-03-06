import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import PostCard from '@/components/PostCard';
import PostCardSkeleton from '@/components/PostCard/skeleton';
import { Flexbox } from '@/components/elements/Box';
import Color from '@/components/elements/Color';
import Typography from '@/components/elements/Typography';
import usePosts from '@/hooks/queries/usePosts';

interface Props {
  author?: string;
  tag?: string;
  onlySavedPosts?: boolean;
}

const Feed: FC<Props> = ({ author, onlySavedPosts, tag }) => {
  const pagePostCount = 10;
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isLoading, isError } = usePosts(
    author,
    tag,
    onlySavedPosts,
    pagePostCount,
  );

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
        {[...Array(pagePostCount)].map((_, index) => (
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
        {hasNextPage &&
          [...Array(pagePostCount)].map((_, index) => <PostCardSkeleton key={index} />)}
      </Flexbox>
    </Flexbox>
  );
};

export default Feed;
