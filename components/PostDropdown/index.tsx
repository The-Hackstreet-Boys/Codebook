import { FC, useRef } from 'react';
import { MdDelete, MdMoreHoriz } from 'react-icons/md';

import useDeletePost from '../../hooks/mutations/useDeletePost';
import useBoolean from '../../hooks/useBoolean';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '../elements/Dropdown';

interface Props {
  postId: string;
}

const PostDropdown: FC<Props> = ({ postId }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const { mutate: deletePost } = useDeletePost(postId);

  return (
    <Dropdown ref={ref} isOpen={isOpen}>
      <DropdownToggle onClick={toggleIsOpen}>
        <MdMoreHoriz />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => deletePost()}>
          <MdDelete />
          Delete post
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default PostDropdown;
