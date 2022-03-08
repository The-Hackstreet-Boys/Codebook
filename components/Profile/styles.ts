import styled from 'styled-components';

export const NameContainer = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  @media (max-width: 992px) {
    & ${NameContainer} {
      display: none;
    }
  }
`;
