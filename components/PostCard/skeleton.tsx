import { FC } from 'react';

import { Container } from '../CommentCard/styles';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Skeleton from '../elements/Skeleton';

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
