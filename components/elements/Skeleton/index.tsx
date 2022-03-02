import React from 'react';

import { Shimmer, ShimmerWrapper, SkeletonWrapper, StyledSkeleton } from './styles';

export type SkeletonVariant = 'title' | 'text' | 'rect' | 'circle';

export interface SkeletonProps {
  variant: SkeletonVariant;
  width?: string;
  height?: string;
}

const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <SkeletonWrapper {...props}>
      <StyledSkeleton>
        <ShimmerWrapper>
          <Shimmer />
        </ShimmerWrapper>
      </StyledSkeleton>
    </SkeletonWrapper>
  );
};

export default Skeleton;
