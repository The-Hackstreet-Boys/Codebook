import { FC } from 'react';

import Profile from '../Profile';
import Typography from '../elements/Typography';
import { Container } from './styles';

const HomeSidebar: FC = () => (
  <Container>
    <Typography variant="h5" m="2rem 1.5rem 1rem 1.5rem">
      Suggested contacts
    </Typography>
    {Array(6)
      .fill(null)
      .map((_, index) => (
        <Profile key={index} suggested />
      ))}
    <Typography variant="h5" m="2rem 1.5rem 1rem 1.5rem">
      Contacts
    </Typography>
    {Array(10)
      .fill(null)
      .map((_, index) => (
        <Profile key={index} />
      ))}
  </Container>
);

export default HomeSidebar;
