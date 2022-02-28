import styled from 'styled-components';

export const DropdownToggle = styled.button<{ isVisible: boolean }>`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, isVisible }) =>
    isVisible ? theme.overlay2 : theme.foreground};
  ${({ theme }) => theme.shadow}
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.transition};
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    background: ${({ theme }) => theme.overlay3};
  }
`;

export const Dropdown = styled.div<{ isVisible: boolean }>`
  z-index: 99;
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: ${({ isVisible }) => (isVisible ? '1rem' : '0')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: ${({ theme }) => theme.foreground};
  width: 15rem;
  background: ${({ theme }) => theme.foreground};
  background: ${({ theme }) => theme.foregroundGradient};
  ${({ theme }) => theme.foregroundBlur}
  ${({ theme }) => theme.shadow}
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem;
`;

export const DropdownItem = styled.button`
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

export const DropdownDivider = styled.hr`
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.overlay};
  border: none;
  height: 1px;
`;
