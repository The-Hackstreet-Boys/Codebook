import styled from 'styled-components';

export type FlexboxAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'initial'
  | 'inherit';

export type FlexboxJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial'
  | 'inherit';

export type FlexboxFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface FlexboxProps {
  direction?: 'row' | 'column';
  alignItems?: FlexboxAlignItems;
  justifyContent?: FlexboxJustifyContent;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  flexWrap?: FlexboxFlexWrap;
  gap?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
}

const Flexbox = styled.div<FlexboxProps>`
  ${({
    direction = 'row',
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    flexGrow = 0,
    flexShrink = 0,
    flexBasis = 'auto',
    flexWrap = 'nowrap',
    gap = '0',
    margin = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    padding = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    width = 'auto',
    height = 'auto',
    maxWidth = 'none',
  }) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-grow: ${flexGrow};
    flex-shrink: ${flexShrink};
    flex-basis: ${flexBasis};
    flex-wrap: ${flexWrap};
    gap: ${gap};
    ${
      margin
        ? `margin: ${margin};`
        : `margin-top: ${marginTop};
    margin-right: ${marginRight};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};`
    }
    ${
      padding
        ? `padding: ${padding};`
        : `padding-top: ${paddingTop};
    padding-right: ${paddingRight};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};`
    }
    width:${width};
    height:${height};
    max-width:${maxWidth};
  `}
`;

export default Flexbox;
