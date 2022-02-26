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
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  color: ${(props) => props.theme.text};
  padding: ${({ size = 'md' }) =>
    size === 'md' ? '0.5rem 1.25rem' : '0.25rem 1rem'};
  border-radius: 0.25rem;
  font-size: ${({ size = 'md', theme }) =>
    size === 'md' ? theme.fontSizeMd : theme.fontSizeXs};
  & :hover {
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.overlay};
  }
  & > svg {
    ${(props) => props.secondary && `color: ${props.theme.secondary};`}
    width: ${({ size = 'md' }) => (size === 'md' ? '1.25rem' : '0.75')};
    height: ${({ size = 'md' }) => (size === 'md' ? '1.25rem' : '0.75')};
  }
`;

export default IconButton;
