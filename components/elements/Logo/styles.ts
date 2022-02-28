import styled from 'styled-components';

export const StyledLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  font-size: ${({ theme }) => theme.fontSizeLg};
  color: ${({ theme }) => theme.text};
  &::after {
    content: '.';
    color: ${({ theme }) => theme.primary};
  }
`;
