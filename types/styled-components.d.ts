import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    foreground: string;
    overlay: string;
    text: string;
    textSecondary: string;
    primary: string;
    secondary: string;
    dropdownBackground: string;
    buttonPrimaryHover: string;
    buttonSecondaryHover: string;
    buttonPrimaryDisabled: string;
    buttonSecondaryDisabled: string;
    active: string;
    border: string;
    fontFamily: string;
    fontFamilySecondary: string;
    fontSizeXxxs: string;
    fontSizeXxs: string;
    fontSizeXs: string;
    fontSizeSm: string;
    fontSizeMd: string;
    fontSizeLg: string;
    fontSizeXl: string;
    fontSizeXxl: string;
    fontSizeXxxl: string;
    fontWeightLight: string;
    fontWeightRegular: string;
    fontWeightMedium: string;
    fontWeightSemiBold: string;
    fontWeightBold: string;
    fontWeightExtraBold: string;
    fontWeightBlack: string;
    transition: string;
  }
}
