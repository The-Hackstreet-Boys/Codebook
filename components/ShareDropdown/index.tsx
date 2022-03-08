import { FC } from 'react';
import { FaFacebook, FaLinkedinIn, FaRedditAlien, FaTwitter } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';

import Dropdown, { DropdownMenu, DropdownToggle } from '@/components/elements/Dropdown';
import IconButton from '@/components/elements/IconButton';

import { Container } from './styles';

interface Props {
  postId: string;
}

const ShareDropdown: FC<Props> = ({ postId }) => {
  const shareUrl = `www.codebook.space/posts/${postId}`;

  return (
    <Dropdown>
      <DropdownToggle>
        <IconButton>
          <MdShare />
        </IconButton>
      </DropdownToggle>
      <DropdownMenu>
        <Container>
          <FacebookShareButton url={shareUrl}>
            <FaFacebook />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <FaTwitter />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <FaLinkedinIn />
          </LinkedinShareButton>
          <RedditShareButton url={shareUrl}>
            <FaRedditAlien />
          </RedditShareButton>
        </Container>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ShareDropdown;
