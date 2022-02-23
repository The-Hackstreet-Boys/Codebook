import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  weight: 100vw;
  display: grid;
  grid-template-columns: 1fr 20rem;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
