import { FC } from 'react';

import { Container, Image } from './styles';

interface Props {
  src: string;
}

const Avatar: FC<Props> = ({ src }) => (
  <Container>
    <Image src={src} alt="avatar" />
  </Container>
);

export default Avatar;
