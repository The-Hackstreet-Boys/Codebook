import { FC } from "react";
import {DropdownSection, DropdownTitle, DropdownContainer, Dropdown, DropdownItem} from "./styles"


const HeaderDropdown : FC = ({children})=> 
          <DropdownSection>
          <DropdownTitle>
              {children}
          </DropdownTitle>
          <DropdownContainer>
            <Dropdown>
            {
              // eslint-disable-next-line
              <a href="/api/auth/logout">
                    <DropdownItem>
                      Log out
                  </DropdownItem>
              
              </a>
            }
                
            </Dropdown>
          </DropdownContainer>
        </DropdownSection>
  

  export default HeaderDropdown;