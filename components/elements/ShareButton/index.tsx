import { FC } from 'react';
import { ShareSocial } from 'react-share-social';

import { style } from './styles';

interface Props {
  postId: string;
}

const RSSUsage: FC<Props> = ({ postId }) => {
  return (
    <ShareSocial
      style={style}
      url={`${origin}/posts/${postId}`}
      socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
    />
  );
};

export default RSSUsage;
