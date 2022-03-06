import { FC } from 'react';
import { FaFacebook, FaLinkedinIn, FaRedditAlien, FaTwitter } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';

import { Dropdown, DropdownMenu } from '@/components/elements/Dropdown';
import IconButton from '@/components/elements/IconButton';
import useBoolean from '@/hooks/useBoolean';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import { Container } from './styles';

interface Props {
  postId: string;
}

const ShareDropdown: FC<Props> = ({ postId }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));
  const shareUrl = `www.codebook.space/posts/${postId}`;

  return (
    <Dropdown ref={ref} isOpen={isOpen} grow>
      <IconButton onClick={toggleIsOpen}>
        <MdShare />
      </IconButton>
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
