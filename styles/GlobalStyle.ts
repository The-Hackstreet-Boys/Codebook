import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
        scrollbar-width: thin;
        scrollbar-color: ${(props) => props.theme.overlay} transparent;
    }

    :root {
        font-size: 16px;
        font-family: ${(props) => props.theme.fontFamily};
        color: ${(props) => props.theme.text};
        line-height: 1.3;
        
        @media (max-width: 768px) {
            font-size: 17px;
        }
        @media (max-width: 576px) {
            font-size: 18px;
        }
    }

    body {
        background: ${(props) => props.theme.background};
    }

    a {
      text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
        @media (max-width: 992px) {
        display: none;
        }
    }
    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: ${(props) => props.theme.overlay};
    }
`;

export default GlobalStyle;
