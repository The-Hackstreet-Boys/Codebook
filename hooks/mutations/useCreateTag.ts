import axios from 'axios';
import { useMutation } from 'react-query';

import { Tag } from '../../models/tag';

export interface NewTag {
  text: string;
}

const createTag = async (newTag: NewTag) => {
  const { origin } = window.location;
  const response = await axios.post<Tag>(`${origin}/api/posts/tags`, newTag);

  const createdTag = response.data;
  return createdTag;
};

const useCreateTag = (onSuccess: () => void) => {
  return useMutation((newTag: NewTag) => createTag(newTag), { onSuccess });
};

export default useCreateTag;
