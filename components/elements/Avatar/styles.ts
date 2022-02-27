import styled from 'styled-components';

import { AvatarSize } from '.';

export const Container = styled.div<{
  size: AvatarSize;
  showActiveStatus: boolean;
}>`
  position: relative;
  ${(props) =>
    props.size === 'sm' &&
    `width: 2.5rem;
    height: 2.5rem;`}
  ${(props) =>
    props.size === 'md' &&
    `width: 5rem;
    height: 5rem;`}
  ${(props) =>
    props.size === 'lg' &&
    `width: 7.5rem;
    height: 7.5rem;`}
  ${(props) =>
    props.showActiveStatus &&
    `&::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background: ${props.theme.active};
    border: solid ${props.theme.background};
    ${props.size === 'sm' ? ' border-width: 0.175rem;' : ''}
    ${props.size === 'md' ? 'border-width: 0.25rem;' : ''}
    ${props.size === 'lg' ? 'border-width: 0.325rem;' : ''}
  }`}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
