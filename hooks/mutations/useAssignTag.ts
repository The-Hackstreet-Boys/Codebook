import axios from 'axios';
import { useMutation } from 'react-query';

import { Tag } from '../../models/tag';

export interface NewTag {
  text: string;
}

const assignTag = async (newTag: NewTag) => {
  const { origin } = window.location;
  const response = await axios.post<Tag>(`${origin}/api/posts/tags`, newTag);

  const createdTag = response.data;
  return createdTag;
};

const useAssignTag = (onSuccess: () => void) => {
  return useMutation((newTag: NewTag) => assignTag(newTag), { onSuccess });
};

export default useAssignTag;
