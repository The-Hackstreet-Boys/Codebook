import { FC, useState } from 'react';
import { MdFavorite } from 'react-icons/md';

import { IconButton } from '../PostDisplay/styles';

const LikeButton: FC = () => {
  const [like, setLiked] = useState({ count: 0, liked: false });

  const likeCounter = () => {
    if (!like.liked) {
      setLiked({ count: like.count + 1, liked: true });
    } else {
      setLiked({ count: like.count - 1, liked: false });
    }
  };

  return (
    <IconButton onClick={likeCounter}>
      <MdFavorite /> {like.count}
    </IconButton>
  );
};

export default LikeButton;
