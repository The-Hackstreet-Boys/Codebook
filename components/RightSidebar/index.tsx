import { FC } from 'react';

import Profile, { ProfileSkeleton } from '@/components/Profile';
import TagList from '@/components/TagList';
import { Flexbox } from '@/components/elements/Box';
import Card from '@/components/elements/Card';
import Color from '@/components/elements/Color';
import Skeleton from '@/components/elements/Skeleton';
import Typography from '@/components/elements/Typography';
import useContacts from '@/hooks/queries/useContacts';
import useTags from '@/hooks/queries/useTags';

import { Container } from './styles';

const RightSidebar: FC = () => {
  const { data: contacts, isLoading, isError } = useContacts();
  const { data: tags } = useTags();

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
              {[...Array(5)].map((_, index) => (
                <ProfileSkeleton key={index} />
              ))}
            </Flexbox>
          </Card>
          <Card>
            <Flexbox direction="column" gap="1rem">
              <Skeleton variant="title" />
              {[...Array(10)].map((_, index) => (
                <ProfileSkeleton key={index} />
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
        {tags && (
          <Card>
            <Flexbox direction="column" gap="1rem">
              <Typography variant="h5">Suggested tags</Typography>
              <TagList tags={tags.slice(0, 10)} />
            </Flexbox>
          </Card>
        )}
        <Card>
          <Flexbox direction="column" gap="1rem">
            <Typography variant="h5">Suggested contacts</Typography>
            {contacts?.suggestedContacts.map((user) => (
              <Profile key={user._id} user={user} />
            ))}
          </Flexbox>
        </Card>
        <Card>
          <Flexbox direction="column" gap="1rem">
            <Typography variant="h5">Contacts</Typography>
            {contacts?.contacts.map((user) => (
              <Profile key={user._id} user={user} />
            ))}
          </Flexbox>
        </Card>
      </Flexbox>
    </Container>
  );
};

export default RightSidebar;
