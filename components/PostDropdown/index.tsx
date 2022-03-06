import { FC } from 'react';
import { MdDelete, MdMoreHoriz } from 'react-icons/md';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/elements/Dropdown';
import useDeletePost from '@/hooks/mutations/useDeletePost';
import useBoolean from '@/hooks/useBoolean';
import useOnClickOutside from '@/hooks/useOnClickOutside';

interface Props {
  postId: string;
}

const PostDropdown: FC<Props> = ({ postId }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useBoolean(false);
  const { mutate: deletePost } = useDeletePost(postId);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsOpen(false));

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
