import { FC } from 'react';
import { MdArrowDropDown, MdDarkMode, MdLightMode, MdLogout, MdSettings } from 'react-icons/md';

import Dropdown, {
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  DropdownToggleButton,
} from '@/components/elements/Dropdown';
import useTheme from '@/contexts/ThemeContext';

const HeaderDropdown: FC = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownToggle>
        <DropdownToggleButton>
          <MdArrowDropDown />
        </DropdownToggleButton>
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
