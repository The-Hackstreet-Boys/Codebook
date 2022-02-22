import styled from 'styled-components';

import { ButtonSize } from './';

export const PrimaryButton = styled.button<{
  size: ButtonSize;
  isFullWidth?: boolean;
}>`
  margin: 0;
  color: ${(props) => props.theme.primary};
  background: none;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 0.25rem;
  ${(props) =>
    props.size === 'lg' &&
    `padding: 1rem 1.75rem; font-size: ${props.theme.fontSizeSm};`}
  ${(props) =>
    props.size === 'md' &&
    `padding: 0.75rem 1rem; font-size: ${props.theme.fontSizeXs};`}
    ${(props) =>
    props.size === 'sm' &&
    `padding: 0.5rem 0.75rem; font-size: ${props.theme.fontSizeXxs};`}
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  text-decoration: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  ${(props) => props.isFullWidth && 'width: 100%;'};
`;

export const SecondaryButton = styled.button<{
  size: ButtonSize;
  isFullWidth?: boolean;
}>`
  margin: 0;
  color: ${(props) => props.theme.secondary};
  background: none;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 0.25rem;
  ${(props) =>
    props.size === 'lg' &&
    `padding: 1rem 1.75rem; font-size: ${props.theme.fontSizeSm};`}
  ${(props) =>
    props.size === 'md' &&
    `padding: 0.75rem 1rem; font-size: ${props.theme.fontSizeXs};`}
    ${(props) =>
    props.size === 'sm' &&
    `padding: 0.5rem 0.75rem; font-size: ${props.theme.fontSizeXxs};`}
  font-family: ${(props) => props.theme.fontFamilySecondary};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  text-decoration: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  ${(props) => props.isFullWidth && 'width: 100%;'};
  & :hover {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.secondary};
  }
  & > svg {
    width: 1rem;
    height: 1rem;
  }
`;
