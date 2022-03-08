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
        scrollbar-color: ${({ theme }) => theme.overlay} transparent;
    }

    :root {
        font-size: 16px;
        font-family: ${({ theme }) => theme.fontFamily};
        color: ${({ theme }) => theme.text};
        line-height: 1.3;
        
        @media (max-width: 992px) {
            font-size: 17px;
        }
    }

    body {
        background: ${({ theme }) => theme.background};
    }

    a {
      text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
        @media (max-width: 992px) {
            display: none;
        }
    }

    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background: ${({ theme }) => theme.overlay};
        border-radius: ${({ theme }) => theme.borderRadius};
    }

    ::-webkit-scrollbar-corner{
        background: transparent;
    }
`;

export default GlobalStyle;
