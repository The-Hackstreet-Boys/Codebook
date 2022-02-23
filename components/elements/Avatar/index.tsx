import { FC } from 'react';

import { Container, Image } from './styles';

export type AvatarSize = 'sm' | 'md' | 'lg';

interface Props {
  size?: AvatarSize;
  src: string;
}

const Avatar: FC<Props> = ({ src, size = 'sm' }) => (
  <Container size={size}>
    <Image src={src} alt="avatar" />
  </Container>
);

export default Avatar;
