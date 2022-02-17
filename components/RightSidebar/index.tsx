import { FC, useEffect, useState } from 'react';

import Avatar from '../elements/Avatar';
import {
  Container,
  ProfileContainer,
  ProfileMessage,
  ProfileText,
  SectionHeading,
} from './styles';

const Profile: FC<{ suggested?: boolean }> = ({ suggested = false }) => {
  const [user, setUser] = useState<{ name: string; photo: string }>();

  const fetchUser = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    const user = data.results[0];
    setUser({
      name: user.name.first + ' ' + user.name.last,
      photo: user.picture.medium,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <ProfileContainer>
      {user && <Avatar src={user.photo} />}
      <ProfileText>
        {user?.name}
        {suggested && <ProfileMessage>Also enjoys sports</ProfileMessage>}
      </ProfileText>
    </ProfileContainer>
  );
};

const RightSidebar: FC = () => (
  <Container>
    <SectionHeading>Suggested contacts</SectionHeading>
    {Array(6)
      .fill(null)
      .map((_, index) => (
        <Profile key={index} suggested />
      ))}
    <SectionHeading>Contacts</SectionHeading>
    {Array(10)
      .fill(null)
      .map((_, index) => (
        <Profile key={index} />
      ))}
  </Container>
);

export default RightSidebar;
