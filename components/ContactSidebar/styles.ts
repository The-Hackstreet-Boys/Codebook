import styled from 'styled-components';

export const Container = styled.div`
  border-left: 1px solid ${(props) => props.theme.border};
  overflow-x: hidden;
  overflow-y: auto;
`;
