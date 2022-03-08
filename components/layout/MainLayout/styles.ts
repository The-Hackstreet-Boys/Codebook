import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 'header header' 'navbar content';
  overflow: hidden;
  @media (max-width: 992px) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 'header' 'content' 'navbar';
  }
`;

export const Content = styled.main`
  grid-area: content;
  overflow: hidden;
`;
