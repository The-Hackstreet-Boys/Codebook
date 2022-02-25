import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
`;

export const IconButtonContainer = styled.div`
  display: flex;
  border-top: 1px solid ${(props) => props.theme.overlay};
  padding-top: 0.5rem;
`;

export const IconButton = styled.button<{ secondary?: boolean }>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  color: ${(props) => props.theme.text};
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  font-size: ${(props) => props.theme.fontSizeXxs};
  & :hover {
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.overlay};
  }
  & > svg {
    ${(props) => props.secondary && `color: ${props.theme.secondary};`}
    width: 1rem;
    height: 1rem;
  }
`;
