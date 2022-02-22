import styled from 'styled-components';

export const Container = styled.div`
  width: 5rem;
  border-right: 1px solid ${(props) => props.theme.border};
  grid-area: sidebar;
`;

export const NavItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  color: ${(props) => props.theme.textSecondary};
  transition: ${(props) => props.theme.transition};
  &:hover {
    color: ${(props) => props.theme.text};
  }
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &.active {
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.border};
    border-left: 0.25rem solid ${(props) => props.theme.primary};
    border-right: none;
    padding-right: 0.25rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.primary} -500%,
      transparent
    );
  }
`;
