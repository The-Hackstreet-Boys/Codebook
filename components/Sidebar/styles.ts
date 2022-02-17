import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid ${(props) => props.theme.border};
  grid-area: sidebar;
`;

export const NavItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0rem 1.75rem;
  height: 5rem;
  border-radius: 0.2rem;
  color: ${(props) => props.theme.textSecondary};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
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
    border-left: 0.25rem solid ${(props) => props.theme.primary};
    padding-left: 1.5rem;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.primary} -500%,
      transparent
    );
  }
`;
