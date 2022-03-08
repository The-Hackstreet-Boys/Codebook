import styled from 'styled-components';

export const Container = styled.div`
  border-left: 1px solid ${({ theme }) => theme.border};
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: 992px) {
    display: none;
  }
`;
