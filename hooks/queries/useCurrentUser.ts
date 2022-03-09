import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { User } from '@/models/user';

const getCurrentUser = async () => {
  const response = await axios.get('/api/users/me');

  const data = response.data;
  return data;
};

const useCurrentUser = () => {
  const { user } = useAuth0User();

  return useQuery<User>(
    ['currentUser'],
    () => {
      return getCurrentUser();
    },
    {
      enabled: !!user,
    },
  );
};

export default useCurrentUser;
