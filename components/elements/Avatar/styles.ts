import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    width: 1rem;
    height: 1rem;
    border-radius: 05rem;
    background: ${(props) => props.theme.active};
    border: 0.25rem solid ${(props) => props.theme.background};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
`;
