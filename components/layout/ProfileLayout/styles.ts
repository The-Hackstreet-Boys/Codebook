import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 20rem;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin: 0 auto;
  height: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 65rem;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  grid-template-columns: 20rem 1fr;
  @media (max-width: 992px) {
    grid-template-columns: auto;
  }
`;
