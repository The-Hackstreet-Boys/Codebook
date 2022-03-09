import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  weight: 100vw;
  display: grid;
  grid-template-columns: 20rem 1fr;
  overflow: hidden;
  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
