import axios from 'axios';
import { useQuery } from 'react-query';

import { Post } from '../../models/post';

const getPosts = async () => {
  const { origin } = window.location;
  const response = await axios.get(`${origin}/api/posts`);
  const data = response.data;
  return data;
};

const usePosts = () => useQuery<Post[]>('posts', getPosts);

export default usePosts;