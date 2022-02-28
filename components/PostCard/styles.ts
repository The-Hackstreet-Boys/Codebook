import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  padding-bottom: 1rem;
`;

export const ImageContainer = styled.div`
  margin: 1rem -2rem;
`;

export const IconButtonContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.overlay};
  ${ImageContainer} ~ & {
    border-top: none;
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.overlay};
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
`;
