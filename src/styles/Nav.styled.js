import styled from 'styled-components';

const Nav = styled.nav`
    background-color: ${({ theme, themeType }) =>
        themeType === 'dark' ? theme.dark.background : theme.light.background};
    color: ${({ theme, themeType }) =>
        themeType === 'dark' ? theme.dark.fontColor : theme.light.fontColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 68px;
    padding: 8px 10px;
    position: fixed;
    top: 0;
    box-shadow: 0 0 1px 0 hsl(0, 0%, 40%);
    z-index: 10;
    box-sizing: border-box;

    .logo {
        width: 15%;
    }
    .search-field {
        width: 65%;
    }
    .nav-menu {
        width: 20%;
    }
    .icon {
        border-radius: 50%;
        font-size: 1.4rem;
        padding: 10px 10px 4px 10px;
        transition: 0.2s;
    }
    .icon:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.icons.hover.backgroundColor
                : 'hsl(0, 0%, 90%)'};

        cursor: pointer;
    }
    /* logo */

    .logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 5px;
    }
    .menu-icon {
        font-size: 1.3rem;
        margin-right: 1px;
    }
    .logo > .logo-name {
        font-size: 1.35rem;
        margin: 5px;
        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : 'hsl(0, 0%, 30%)'};
    }

    /* search bar */

    .search-field {
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .search-icon {
        position: absolute;
        margin-left: 5px;
        margin-top: 5px;
        opacity: 0.8;
    }
    .search-box {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.nav.searchBoxBackground
                : 'hsl(0, 0%, 95%)'};
        padding: 14px 50px;
        border: 1px;
        border-radius: 10px;
        width: 90%;
        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : 'hsl(0, 0%, 40%)'};
    }
    .search-box:focus {
        box-shadow: 0 0 2px 2px
            ${({ themeType }) =>
                themeType === 'dark' ? 'hsl(0, 0%, 20%)' : 'lightgray'};

        color: ${({ theme, themeType }) =>
            themeType === 'dark' ? theme.dark.fontColor : 'hsl(0, 0%, 20%)'};
    }

    /* menu */
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-menu > div {
        flex: 1;
        display: flex;
        padding: 0 10px;
    }
    .nav-menu > div > * {
        margin: 0 7px;
    }
    .robot {
        background-color: ${({ themeType }) =>
            themeType === 'dark' ? 'hsl(1, 48%, 25%)' : 'hsl(194, 48%, 88%)'};
    }

    /* responsive */

    @media (max-width: 840px) {
        display: grid;
        grid-template-columns: 30vw 10vw 60vw;
        justify-content: center;
        align-items: center;

        .search-field > .icon {
            font-size: 1.55rem;
        }

        .search-box {
            display: none;
        }
    }
`;

export default Nav;
