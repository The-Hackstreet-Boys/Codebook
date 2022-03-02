import { FC } from 'react';

import { Flexbox } from '../elements/Box';
import Skeleton from '../elements/Skeleton';

export const ProfileSkeleton: FC = (props) => (
  <Flexbox gap="0.75rem">
    <Skeleton variant="circle" width="2.5rem" />
    <Flexbox direction="column" justifyContent="center">
      <Skeleton variant="title" width="10rem" />
    </Flexbox>
  </Flexbox>
);
