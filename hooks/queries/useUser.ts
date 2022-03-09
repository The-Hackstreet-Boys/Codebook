import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { ExtendedUser } from '@/models/user';

const getUser = async (userId: string) => {
  const response = await axios.get(`/api/users/${userId}`);

  const data = response.data;
  return data;
};

const useUser = (userId: string) => {
  const { user } = useAuth0User();

  return useQuery<ExtendedUser>(
    ['user', userId],
    () => {
      return getUser(userId);
    },
    {
      enabled: !!user,
    },
  );
};

export default useUser;
