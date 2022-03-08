import { FC } from 'react';

import useDropdown from '@/contexts/DropdownContext';

import { ToggleButton } from './styles';

export const DropdownToggleButton: FC = ({ children }) => {
  const { isOpen } = useDropdown();
  return <ToggleButton isOpen={isOpen}>{children}</ToggleButton>;
};
