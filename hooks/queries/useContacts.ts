import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { User } from '../../models/user';

interface Data {
  contacts: User[];
  suggestedContacts: User[];
}

const getContacts = async () => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/users/me/contacts`);

  const data = response.data;
  return data;
};

const useContacts = (author?: string, limit = 20) => {
  const { user } = useAuth0User();

  return useQuery<Data>(['contacts'], getContacts, {
    enabled: !!user,
    refetchInterval: 15000,
  });
};

export default useContacts;
