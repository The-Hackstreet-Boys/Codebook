import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.overlay};
`;

export const IconButton = styled.button`
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
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const Timestamp = styled.time`
  color: ${(props) => props.theme.primary};
  font-size: ${(props) => props.theme.fontSizeXxs};
  font-weight: ${(props) => props.theme.fontWeightMedium};
`;
