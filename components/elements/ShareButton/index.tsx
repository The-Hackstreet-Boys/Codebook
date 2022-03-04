import { FC } from 'react';
import { ShareSocial } from 'react-share-social';

interface Props {
  postId: string;
}

const styleRSS = {
  background: 'hsla(0, 0%, 100%, 0)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const RSSUsage: FC<Props> = ({ postId }) => {
  return (
    <ShareSocial
      style={styleRSS}
      url={`${origin}/posts/${postId}`}
      socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
    />
  );
};

export default RSSUsage;
