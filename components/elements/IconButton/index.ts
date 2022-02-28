import styled from 'styled-components';

type IconButtonSize = 'sm' | 'md';

interface Props {
  secondary?: boolean;
  grow?: boolean;
  size?: IconButtonSize;
}

const IconButton = styled.button<Props>`
  background: none;
  border: none;
  ${({ grow = true }) =>
    grow &&
    `flex-basis: 0;
  flex-grow: 1;`}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  padding: ${({ size = 'md' }) =>
    size === 'md' ? '0.5rem 1.25rem' : '0.25rem 1rem'};
  border-radius: 0.25rem;
  font-size: ${({ size = 'md', theme }) =>
    size === 'md' ? theme.fontSizeMd : theme.fontSizeXs};
  & :hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.overlay};
  }
  & > svg {
    ${({ secondary, theme }) => secondary && `color: ${theme.secondary};`}
    width: ${({ size = 'md' }) => (size === 'md' ? '1.25rem' : '0.75')};
    height: ${({ size = 'md' }) => (size === 'md' ? '1.25rem' : '0.75')};
  }
`;

export default IconButton;
