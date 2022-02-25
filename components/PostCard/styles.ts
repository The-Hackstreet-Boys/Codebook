import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  padding-bottom: 1rem;
`;

export const IconButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.overlay};
  padding-top: 0.5rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.overlay};
    padding-bottom: 0.5rem;
  }
`;

export const IconButton = styled.button<{ secondary?: boolean }>`
  background: none;
  border: none;
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  color: ${(props) => props.theme.text};
  padding: 0.5rem;
  border-radius: 0.25rem;
  & :hover {
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.overlay};
  }
  & > svg {
    ${(props) => props.secondary && `color: ${props.theme.secondary};`}
    width: 1.25rem;
    height: 1.25rem;
  }
`;
