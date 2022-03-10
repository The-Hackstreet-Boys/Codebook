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

export type BoxDisplay = 'block' | 'flex' | 'inline' | 'inline-block';

interface BoxProps {
  display?: BoxDisplay;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
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
  minWidth?: string;
  maxWidth?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

interface FlexboxProps {
  alignItems?: FlexboxAlignItems;
  justifyContent?: FlexboxJustifyContent;
  direction?: 'row' | 'column';
  flexWrap?: FlexboxFlexWrap;
  gap?: string;
}

const Box = styled.div<BoxProps>`
  ${({
    display = 'block',
    flexGrow = 0,
    flexShrink = 0,
    flexBasis = 'auto',
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
    minWidth = '0',
    maxWidth = 'none',
    position = 'static',
    top = 'auto',
    right = 'auto',
    bottom = 'auto',
    left = 'auto',
  }) => `
    display: ${display};
    flex-grow: ${flexGrow};
    flex-shrink: ${flexShrink};
    flex-basis: ${flexBasis};
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
    min-width:${minWidth};
    max-width:${maxWidth};
    position:${position};
    top:${top};
    right:${right};
    bottom:${bottom};
    left:${left};
    
  `}
`;

export const Flexbox = styled(Box)<FlexboxProps>`
  ${({
    direction = 'row',
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    flexWrap = 'nowrap',
    gap = '0',
  }) => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  flex-wrap: ${flexWrap};
  gap: ${gap};
`}
`;

export default Box;
