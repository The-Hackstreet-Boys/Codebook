import { FC } from 'react';

import useDropdown from '@/contexts/DropdownContext';

import { Menu } from './styles';

export const DropdownMenu: FC = ({ children }) => {
  const { isOpen, x, y, strategy, floating } = useDropdown();

  return isOpen ? (
    <Menu ref={floating} position={strategy} x={x || 0} y={y || 0}>
      {children}
    </Menu>
  ) : (
    <></>
  );
};
