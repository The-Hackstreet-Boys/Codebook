import axios from 'axios';
import { Types } from 'mongoose';
import { useMutation } from 'react-query';

import { Post } from '@/models/post';

export interface NewPost {
  text: string;
  image?: { url: string; width: number; height: number };
  tags: Types.ObjectId[];
  code?: { text: string; language: string };
}

const createPost = async (newPost: NewPost) => {
  const response = await axios.post<Post>('/api/posts', newPost);

  const createdPost = response.data;
  return createdPost;
};

const useCreatePost = (onSuccess: () => void) => {
  return useMutation((newPost: NewPost) => createPost(newPost), { onSuccess });
};

export default useCreatePost;
