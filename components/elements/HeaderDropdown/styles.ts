import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from 'styled-components';

export const DropdownContainer = styled.div`
  z-index: 5;
  position: absolute;
  right: -1.5rem;
  visibility: hidden;
  opacity: 0;
  padding-top: 0;
  transition: all 150ms ease-in-out;
`;
export const DropdownTitle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
export const Dropdown = styled.div`
  width: 20rem;
  background-color: ${(props) => props.theme.dropdownBackground};
  box-shadow: 0 0.75rem 1.75rem 0 ${(props) => props.theme.dropdownShadow};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;
export const DropdownItem = styled.button`
  padding: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.secondary};
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 0.5rem;
  transition: color 150ms, background-color 150ms;
  background: none;
  border: none;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.buttonPrimaryHover};
    color: ${(props) => props.theme.text};
    & > svg {
      fill: ${(props) => props.theme.text};
    }
  }
  & > svg {
    transition: fill 150ms;
    height: 1.25rem;
    width: 1.25rem;
    fill: ${(props) => props.theme.secondary};
  }
`;
export const DropdownSection = styled.div`
  position: relative;
  &:hover {
    & > ${DropdownTitle} {
      & > ${(props) => props.theme.primary} {
        fill: ${(props) => props.theme.text};
        transform: rotate(180deg);
      }
    }
    & > ${DropdownContainer} {
      visibility: visible;
      opacity: 1;
      padding-top: 1rem;
    }
  }
`;
