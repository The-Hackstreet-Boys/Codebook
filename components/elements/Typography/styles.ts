import styled from 'styled-components';

import { TypographyProps } from './';

const BaseTypography = styled.div<Omit<TypographyProps, 'variant'>>`
  margin: ${(props) => props.m ?? 0};
  padding: ${(props) => props.p ?? 0};
  ${(props) =>
    props.font === 'secondary' &&
    `font-family: ${props.theme.fontFamilySecondary};`};
  ${(props) => `color: ${props.theme.text};`};
  ${(props) => `text-align: ${props.align};`};
  ${(props) => `text-transform: ${props.transform};`};
  ${(props) =>
    props.isLink &&
    `
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `};
`;

export const P = styled(BaseTypography).attrs({
  as: 'p',
})`
  white-space: pre-line;
  color: ${(props) => props.theme.textSecondary};
  font-size: ${(props) => props.theme.fontSizeXs};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  overflow-wrap: anywhere;
  line-height: 1.25rem;
`;

export const H1 = styled(BaseTypography).attrs({
  as: 'h1',
})`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: ${(props) => props.theme.fontWeightExtraBold};
`;

export const H2 = styled(BaseTypography).attrs({
  as: 'h2',
})`
  font-size: ${(props) => props.theme.fontSizeXxl};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export const H3 = styled(BaseTypography).attrs({
  as: 'h3',
})`
  font-size: ${(props) => props.theme.fontSizeXl};
  font-weight: ${(props) => props.theme.fontWeightBold};
`;

export const H4 = styled(BaseTypography).attrs({
  as: 'h4',
})`
  font-size: ${(props) => props.theme.fontSizeLg};
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
`;

export const H5 = styled(BaseTypography).attrs({
  as: 'h5',
})`
  font-size: ${(props) => props.theme.fontSizeMd};
  font-weight: ${(props) => props.theme.fontWeightSemiBold};
`;

export const H6 = styled(BaseTypography).attrs({
  as: 'h6',
})`
  font-size: ${(props) => props.theme.fontSizeSm};
  font-weight: ${(props) => props.theme.fontWeightMedium};
`;
