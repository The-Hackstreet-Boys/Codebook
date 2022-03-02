import styled from 'styled-components';

import { ButtonSize } from './';

export const PrimaryButton = styled.button<{
  size: ButtonSize;
  isFullWidth?: boolean;
}>`
  margin: 0;
  color: ${({ theme }) => theme.buttonText};
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme, size }) => size === 'lg' && `padding: 1rem 3rem; font-size: ${theme.fontSizeSm};`}
  ${({ theme, size }) =>
    size === 'md' && `padding: 0.75rem 2.25rem; font-size: ${theme.fontSizeXs};`}
    ${({ theme, size }) =>
    size === 'sm' && `padding: 0.5rem 1.5rem; font-size: ${theme.fontSizeXxs};`}
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  ${({ isFullWidth }) => isFullWidth && 'width: 100%;'};
  &:hover {
    background: ${({ theme }) => theme.buttonPrimaryHover};
  }
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:disabled {
    background: ${({ theme }) => theme.buttonPrimaryDisabled};
    cursor: default;
    &:hover {
      background: ${({ theme }) => theme.buttonPrimaryDisabled};
    }
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.secondary};
  &:hover {
    background: ${({ theme }) => theme.buttonSecondaryHover};
  }
  &:disabled {
    background: ${({ theme }) => theme.buttonSecondaryDisabled};
    &:hover {
      background: ${({ theme }) => theme.buttonSecondaryDisabled};
    }
  }
`;
