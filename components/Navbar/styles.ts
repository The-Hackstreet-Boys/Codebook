import styled from 'styled-components';

export const Container = styled.div`
  border-right: 1px solid ${({ theme }) => theme.border};
  grid-area: navbar;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 992px) {
    width: 100%;
    flex-direction: row;
    border-right: none;
    border-top: 1px solid ${({ theme }) => theme.border};
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
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
  @media (max-width: 992px) {
    &.active {
      border: 1px solid ${({ theme }) => theme.border};
      border-top: none;
      border-bottom: 0.25rem solid ${({ theme }) => theme.primary};
      padding-right: 0;
      padding-top: 0.25rem;
      background: linear-gradient(0deg, ${({ theme }) => theme.primary} -500%, transparent);
    }
  }
`;
