import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 20% 45rem;
  grid-template-rows: 1fr auto;
  gap: 2rem;
`;

export const ProfileSideContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ProfileContent = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.75rem;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.secondary};
  flex-basis: 0;
  flex-grow: 1;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  color: ${(props) => props.theme.secondary};
  padding: 0.5rem;
  border-radius: 0.25rem;
  & :hover {
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.secondary};
  }
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
