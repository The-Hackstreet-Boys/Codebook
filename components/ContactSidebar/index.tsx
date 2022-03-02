import { FC } from 'react';

import useContacts from '../../hooks/queries/useContacts';
import Profile from '../Profile';
import { Flexbox } from '../elements/Box';
import Card from '../elements/Card';
import Color from '../elements/Color';
import Skeleton from '../elements/Skeleton';
import Typography from '../elements/Typography';
import { Container } from './styles';

const ContactSidebar: FC = () => {
  const { data, isLoading, isError } = useContacts();

  if (isError) {
    return (
      <Container>
        <Flexbox alignItems="center" justifyContent="center" height="100%">
          <Typography variant="h6">
            <Color color="secondary">Error fetching contacts</Color>
          </Typography>
        </Flexbox>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Flexbox direction="column" padding="1rem" gap="1rem">
          <Card>
            <Flexbox direction="column" gap="1rem">
              <Skeleton variant="title" />
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <Profile variant="skeleton" key={index} />
                ))}
            </Flexbox>
          </Card>
          <Card>
            <Flexbox direction="column" gap="1rem">
              <Skeleton variant="title" />
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <Profile variant="skeleton" key={index} />
                ))}
            </Flexbox>
          </Card>
        </Flexbox>
      </Container>
    );
  }

  return (
    <Container>
      <Flexbox direction="column" padding="1rem" gap="1rem">
        <Card>
          <Flexbox direction="column" gap="1rem">
            <Typography variant="h5">Suggested contacts</Typography>
            {data?.suggestedContacts.map((user) => (
              <Profile variant="default" key={user._id} user={user} />
            ))}
          </Flexbox>
        </Card>
        <Card>
          <Flexbox direction="column" gap="1rem">
            <Typography variant="h5">Contacts</Typography>
            {data?.contacts.map((user) => (
              <Profile variant="default" key={user._id} user={user} />
            ))}
          </Flexbox>
        </Card>
      </Flexbox>
    </Container>
  );
};

export default ContactSidebar;
