import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 25% auto 20rem;
  grid-template-rows: 1fr auto;
`;

export const ProfileSideContainer = styled.div`
  width: 100%;
  padding: 4rem;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileContent = styled.div`
  width: 100%;
  padding: 4rem 4rem 4rem 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-top: 0.75rem;
  width: 100%;
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

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.75rem;
  background: ${(props) => props.theme.foreground};
  background: rgb(255, 255, 255);
  background: linear-gradient(
    112deg,
    ${(props) => props.theme.foreground},
    ${(props) => props.theme.primary} 500%
  );
  padding: 2rem;
  border-radius: 0.25rem;
`;
