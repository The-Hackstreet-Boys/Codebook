import { DropdownSection,DropdownTitle, DropdownContainer, DropdownItem, Dropdown} from "./styles";





const HeaderDropDown : FC = ()=> {
  return ( <DropdownSection>
          <DropdownTitle>
            <Profile />
          </DropdownTitle>
          <DropdownContainer>
            <Dropdown>
                  <DropdownItem onClick={logOut}>
                    <LogOutIcon />
                    Log Out
                  </DropdownItem>
            </Dropdown>
          </DropdownContainer>
        </DropdownSection>
  )}

  export default HeaderDropDown;