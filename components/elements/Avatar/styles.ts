import styled from 'styled-components';

import { AvatarSize } from '.';

export const Container = styled.div<{
  size: AvatarSize;
  showActiveStatus: boolean;
}>`
  position: relative;
  ${({ size }) =>
    size === 'sm' &&
    `width: 2.5rem;
    height: 2.5rem;`}
  ${({ size }) =>
    size === 'md' &&
    `width: 5rem;
    height: 5rem;`}
  ${({ size }) =>
    size === 'lg' &&
    `width: 7.5rem;
    height: 7.5rem;`}
  ${({ showActiveStatus, theme, size }) =>
    showActiveStatus &&
    `&::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: ${theme.active};
    border: solid ${theme.background};
    ${size === 'sm' ? ' border-width: 0.175rem;' : ''}
    ${size === 'md' ? 'border-width: 0.25rem;' : ''}
    ${size === 'lg' ? 'border-width: 0.325rem;' : ''}
  }`}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
