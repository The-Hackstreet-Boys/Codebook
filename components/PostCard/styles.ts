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
    margin-bottom: 1rem;
  }
`;
