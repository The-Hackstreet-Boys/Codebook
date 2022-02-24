import { FC } from 'react';

import useContacts from '../../hooks/queries/useContacts';
import Profile from '../Profile';
import Typography from '../elements/Typography';
import { Container } from './styles';

const ContactSidebar: FC = () => {
  const { data } = useContacts();

  return (
    <Container>
      <Typography variant="h5" m="2rem 1.5rem 1rem 1.5rem">
        Suggested contacts
      </Typography>
      {data?.suggestedContacts.map((user) => (
        <Profile key={user._id} user={user} />
      ))}
      <Typography variant="h5" m="2rem 1.5rem 1rem 1.5rem">
        Contacts
      </Typography>
      {data?.contacts.map((user) => (
        <Profile key={user._id} user={user} />
      ))}
    </Container>
  );
};

export default ContactSidebar;
