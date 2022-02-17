import styled from 'styled-components';

export const StyledLogo = styled.div`
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
  font-size: ${(props) => props.theme.fontSizeLg};
  color: ${(props) => props.theme.text};
  &::after {
    content: '.';
    color: ${(props) => props.theme.primary};
  }
`;
