import styled from 'styled-components';

export const Container = styled.div`
  border-left: 1px solid ${(props) => props.theme.border};
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
