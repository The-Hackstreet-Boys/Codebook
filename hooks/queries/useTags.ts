import axios from 'axios';
import { useQuery } from 'react-query';

import { Tag } from '../../models/tag';

const getTags = async () => {
  const { origin } = window.location;

  const response = await axios.get(`${origin}/api/tags`);

  const data = response.data;
  return data;
};

const useTags = () => useQuery<Tag[]>('tags', () => getTags());

export default useTags;
