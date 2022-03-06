import { FC } from 'react';
import { MdArrowDropDown, MdDarkMode, MdLightMode, MdLogout, MdSettings } from 'react-icons/md';

import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/components/elements/Dropdown';
import useTheme from '@/contexts/ThemeContext';
import useBoolean from '@/hooks/useBoolean';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const HeaderDropdown: FC = () => {
  const [isVisible, toggleIsVisible, setIsVisible] = useBoolean(false);
  const ref = useOnClickOutside<HTMLDivElement>(() => setIsVisible(false));
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Dropdown ref={ref} isOpen={isVisible}>
      <DropdownToggle onClick={toggleIsVisible}>
        <MdArrowDropDown />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={toggleTheme}>
          {isDarkTheme ? <MdDarkMode /> : <MdLightMode />}Theme: {isDarkTheme ? 'Dark' : 'Light'}
        </DropdownItem>
        {/* <DropdownItem>
          <MdSettings />
          Settings
        </DropdownItem> */}
        <DropdownDivider />
        {
          // eslint-disable-next-line
          <a href="/api/auth/logout">
            <DropdownItem>
              <MdLogout />
              Log out
            </DropdownItem>
          </a>
        }
      </DropdownMenu>
    </Dropdown>
  );
};

export default HeaderDropdown;
