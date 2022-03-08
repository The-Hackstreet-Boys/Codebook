import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { Tag } from '@/models/tag';
import { User } from '@/models/user';

interface Data {
  tags: Tag[];
  users: User[];
}

const getSearchResults = async (query: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/search/${query}`);

  const data = response.data;
  return data;
};

const useSearchResults = (query: string) => {
  const { user } = useAuth0User();

  return useQuery<Data>(
    ['search', query],
    () => {
      return getSearchResults(query);
    },
    {
      enabled: !!user && !!query,
      keepPreviousData: true,
    },
  );
};

export default useSearchResults;
