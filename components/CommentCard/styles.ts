import styled from 'styled-components';

export const Timestamp = styled.time`
  color: ${(props) => props.theme.textSecondary};
  font-size: ${(props) => props.theme.fontSizeXxxs};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  margin-left: 0.75rem;
`;
