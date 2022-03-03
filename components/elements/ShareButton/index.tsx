import { useRouter } from 'next/router';
import { ShareSocial } from 'react-share-social';

import usePost from '../../../hooks/queries/usePost';
import { style } from './styles';

export default function RSSUsage() {
  const router = useRouter();
  const { postId } = router.query;
  const { data: post } = usePost(postId as string);
  return (
    <ShareSocial
      style={style}
      url={}
      socialTypes={['facebook', 'twitter', 'reddit', 'linkedin']}
    />
  );
}
