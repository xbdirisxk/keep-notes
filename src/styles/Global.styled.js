import * as styled from 'styled-components';

const GlobalStyles = styled.createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#fff' : theme.dark.background};
        color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#000' : theme.dark.fontColor};
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }

    a {
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

    /* ============
       Modal styles
       ============ */
    .css-1k9ek97 {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light' ? '#fff' : theme.dark.background} !important;
        border: 2px solid #fff !important;
    }
    .modal-box {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px;
        padding-bottom: 5px;
        border: 1px;
        border-radius: 10px;
        transform: translate(-50%, -50%);
        min-width: 30vw;
        max-width: 50vw;
        max-height: 85vh;
        overflow: auto;
    }

    #modal-modal-title {
        font-weight: bold;
    }
    .modal-box > .icons {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        font-size: 1.2rem;
        margin-right: 5px;
    }
    .modal-box > .icons > * {
        margin-left: 10px;
        padding: 2px;
        border-radius: 30px;
        padding: 6px 6px 1px;
        transition: 0.2s;
    }
    .modal-box > .icons > *:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light'
                ? 'hsl(56, 45%, 80%)'
                : theme.dark.icons.hover.backgroundColor};
        cursor: default;
    }

    @media (max-width: 750px) {
        .modal-box {
            min-width: 86vw;
        }
    }
`;

export default GlobalStyles;
