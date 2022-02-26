import { FC } from 'react';

import useContacts from '../../hooks/queries/useContacts';
import Profile from '../Profile';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Typography from '../elements/Typography';
import { Container } from './styles';

const ContactSidebar: FC = () => {
  const { data } = useContacts();

  return (
    <Container>
      <Flexbox direction="column" padding="1rem" gap="1rem">
        <Card>
          <Flexbox direction="column" gap="1rem">
            <Typography variant="h5">Suggested contacts</Typography>
            {data?.suggestedContacts.map((user) => (
              <Profile key={user._id} user={user} />
            ))}
          </Flexbox>
        </Card>
        <Card>
          <Flexbox direction="column" gap="1rem">
            <Typography variant="h5">Contacts</Typography>
            {data?.contacts.map((user) => (
              <Profile key={user._id} user={user} />
            ))}
          </Flexbox>
        </Card>
      </Flexbox>
    </Container>
  );
};

export default ContactSidebar;
