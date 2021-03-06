import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { User } from '@/models/user';

interface Data {
  contacts: User[];
  suggestedContacts: User[];
}

const getContacts = async () => {
  const response = await axios.get('/api/users/me/contacts');

  const data = response.data;
  return data;
};

const useContacts = () => {
  const { user } = useAuth0User();

  return useQuery<Data>(['contacts'], getContacts, {
    enabled: !!user,
    refetchInterval: 15000,
  });
};

export default useContacts;
