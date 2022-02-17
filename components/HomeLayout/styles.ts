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
  margin: 0 auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Content = styled.div`
  padding: 1rem;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
