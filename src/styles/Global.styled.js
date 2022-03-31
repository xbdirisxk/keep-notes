import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.background
                : theme.light.background};
        color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.fontColor
                : theme.light.fontColor};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    .container {
        display: grid;
        grid-template-columns: 21vw 79vw;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    img {
        display: block;
        width: 100%;
    }
    button,
    input,
    textarea {
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
    }
    button {
        cursor: pointer;
    }

    /* ============
       masonry grid
       ============ */

    .my-masonry-grid {
        display: flex;
        padding: 20px;
        font-size: 1rem;
        line-height: 1.25rem;
    }
`;

export default GlobalStyle;
