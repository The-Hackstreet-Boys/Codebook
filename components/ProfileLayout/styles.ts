import styled from 'styled-components';

export const ProfileContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 20% auto 20rem;
  grid-template-rows: 1fr auto;
  gap: 2rem;
`;

export const ProfileSideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;
