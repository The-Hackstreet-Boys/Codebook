import { Strategy } from '@floating-ui/react-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ToggleButton = styled.button<{
  hideBackground?: boolean;
  isOpen: boolean;
}>`
  border: none;
  outline: none;
  cursor: pointer;
  background: ${({ hideBackground, theme }) => (hideBackground ? 'none' : theme.overlay)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.transition};
  ${({ theme }) => theme.shadow}
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  &:hover {
    background: ${({ theme }) => theme.overlay3} !important ;
    ${({ theme }) => theme.shadow}
  }
  ${({ isOpen }) => !isOpen && 'box-shadow: none;'}
  background: ${({ theme, isOpen }) => isOpen && theme.overlay2};
  ${({ isOpen }) => isOpen && 'opacity: 1 !important;'}
`;

export const Menu = styled.div<{
  position: Strategy;
  x: number;
  y: number;
}>`
  z-index: 99;
  position: ${({ position }) => position};
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  min-width: 15rem;
  max-width: 20rem;
  max-height: 25rem;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.background};
  @supports (backdrop-filter: blur()) {
    background: ${({ theme }) => theme.dropdown};
    background: ${({ theme }) => theme.dropdownGradient};
    ${({ theme }) => theme.foregroundBlur}
  }
  ${({ theme }) => theme.shadow}
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem;
`;

export const Item = styled.button.attrs({ type: 'button' })`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: ${({ theme }) => theme.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: color 150ms, background-color 150ms;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
  &:hover {
    background: ${({ theme }) => theme.overlay};
    color: ${({ theme }) => theme.text};
    & > svg {
      fill: ${({ theme }) => theme.text};
    }
  }
  & > svg {
    transition: fill 150ms;
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const Divider = styled.hr`
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.overlay};
  border: none;
  height: 1px;
`;
