import { useUser as useAuth0User } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { useQuery } from 'react-query';

import { Tag } from '@/models/tag';

const getTags = async () => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/tags`);

  const data = response.data;
  return data;
};

const useTags = () => {
  const { user } = useAuth0User();
  return useQuery<Tag[]>(
    ['tags'],
    () => {
      return getTags();
    },
    {
      enabled: !!user,
    },
  );
};

export default useTags;
