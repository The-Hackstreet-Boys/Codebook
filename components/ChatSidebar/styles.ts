import styled from 'styled-components';

export const Container = styled.div`
  border-right: 1px solid ${({ theme }) => theme.border};
  overflow-x: hidden;
  overflow-y: auto;
  grid-area: chat-sidebar;
  @media (max-width: 992px) {
    display: none;
  }
`;
