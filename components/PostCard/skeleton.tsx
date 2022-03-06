import { FC } from 'react';

import { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import Skeleton from '@/components/elements/Skeleton';

import { Container } from '../CommentCard/styles';

const PostCardSkeleton: FC = () => (
  <Card>
    <Container>
      <Skeleton variant="circle" width="2.5rem" />
      <Flexbox direction="column" gap="1rem">
        <Flexbox direction="column" gap="0.5rem">
          <Skeleton variant="title" />
          <Skeleton variant="text" width="10%" />
        </Flexbox>
        <Skeleton variant="text" height="15rem" />
      </Flexbox>
    </Container>
  </Card>
);

export default PostCardSkeleton;
