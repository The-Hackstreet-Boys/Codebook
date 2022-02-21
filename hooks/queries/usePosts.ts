import axios from 'axios';
import { useQuery } from 'react-query';

import { Post } from '../../models/post';
import useAccessToken from '../useAccessToken';

const getPosts = async (token: string) => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/posts`, {
    headers: { authorization: `Bearer ${token}` },
  });

  const data = response.data;
  return data;
};

const usePosts = () => {
  const token = useAccessToken();

  return useQuery<Post[]>(
    'posts',
    () => {
      return getPosts(token as string);
    },
    { enabled: !!token },
  );
};

export default usePosts;
