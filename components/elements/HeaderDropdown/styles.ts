import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components";


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
`;
export const Dropdown = styled.div`
  width: 20rem;
  background-color: ${dropdownBackground};
  box-shadow: 0 0.75rem 1.75rem 0 ${dropdownShadow};
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
  color: ${secondaryTextColor};
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
    background-color: ${dropdownBackgroundHover};
    color: ${textColor};
    & > svg {
      fill: ${textColor};
    }
  }
  & > svg {
    transition: fill 150ms;
    height: 1.25rem;
    width: 1.25rem;
    fill: ${secondaryTextColor};
  }
`;
export const DropdownSection = styled.div`
  position: relative;
  &:hover {
    & > ${DropdownTitle} {
      & > ${ExpandMore} {
        fill: ${textColor};
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