import styled from 'styled-components';

export const Container = styled.div`
  width: 5rem;
  border-right: 1px solid ${({ theme }) => theme.border};
  grid-area: sidebar;
`;

export const NavItem = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  color: ${({ theme }) => theme.textSecondary};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
  & > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &.active {
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    border-left: 0.25rem solid ${({ theme }) => theme.primary};
    border-right: none;
    padding-right: 0.25rem;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary} -500%, transparent);
  }
`;
