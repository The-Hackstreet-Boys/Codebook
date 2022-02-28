import axios from 'axios';
import { useMutation } from 'react-query';

import { Post } from '../../models/post';

export interface NewPost {
  text: string;
  picture?: { url: string; width: number; height: number };
}

const createPost = async (newPost: NewPost) => {
  const { origin } = window.location;
  const response = await axios.post<Post>(`${origin}/api/posts`, newPost);

  const createdPost = response.data;
  return createdPost;
};

const useCreatePost = (onSuccess: () => void) => {
  return useMutation((newPost: NewPost) => createPost(newPost), { onSuccess });
};

export default useCreatePost;
