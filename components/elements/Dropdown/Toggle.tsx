import { FC } from 'react';

import useDropdown from '@/contexts/DropdownContext';

export const DropdownToggle: FC = ({ children }) => {
  const { toggleIsOpen, reference } = useDropdown();

  return (
    <div onClick={toggleIsOpen} ref={reference}>
      {children}
    </div>
  );
};
