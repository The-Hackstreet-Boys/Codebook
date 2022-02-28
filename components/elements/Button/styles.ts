import styled from 'styled-components';

import { ButtonSize } from './';

export const PrimaryButton = styled.button<{
  size: ButtonSize;
  isFullWidth?: boolean;
}>`
  margin: 0;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${(props) =>
    props.size === 'lg' &&
    `padding: 1rem 3rem; font-size: ${props.theme.fontSizeSm};`}
  ${(props) =>
    props.size === 'md' &&
    `padding: 0.75rem 2.25rem; font-size: ${props.theme.fontSizeXs};`}
    ${(props) =>
    props.size === 'sm' &&
    `padding: 0.5rem 1.5rem; font-size: ${props.theme.fontSizeXxs};`}
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
  text-decoration: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  ${(props) => props.isFullWidth && 'width: 100%;'};
  &:hover {
    background: ${(props) => props.theme.buttonPrimaryHover};
  }
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &:disabled {
    background: ${(props) => props.theme.buttonPrimaryDisabled};
    cursor: default;
    &:hover {
      background: ${(props) => props.theme.buttonPrimaryDisabled};
    }
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: ${(props) => props.theme.secondary};
  &:hover {
    background: ${(props) => props.theme.buttonSecondaryHover};
  }
  &:disabled {
    background: ${(props) => props.theme.buttonSecondaryDisabled};
    &:hover {
      background: ${(props) => props.theme.buttonSecondaryDisabled};
    }
  }
`;
