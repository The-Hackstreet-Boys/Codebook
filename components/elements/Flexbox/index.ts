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

export interface FlexboxProps {
  direction?: 'row' | 'column';
  alignItems?: FlexboxAlignItems;
  justifyContent?: FlexboxJustifyContent;
  gap?: string;
  isFullWidth?: boolean;
}

const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  ${({
    direction = 'row',
    alignItems = 'stretch',
    justifyContent = '	flex-start',
    gap = '0',
    isFullWidth = false,
  }) => `
      flex-direction: ${direction};
      align-items: ${alignItems};
      justify-content: ${justifyContent};
      gap: ${gap};
      ${isFullWidth && 'width: 100%;'};
    `}
`;

export default Flexbox;
