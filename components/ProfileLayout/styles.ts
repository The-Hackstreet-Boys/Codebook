import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 20rem;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: 20rem 1fr;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
