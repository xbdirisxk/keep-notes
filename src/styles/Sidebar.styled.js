import styled from 'styled-components';

const SidebarContainer = styled.div`
    background-color: ${({ theme, themeType }) =>
        themeType === 'dark' ? theme.dark.background : theme.light.background};
    color: ${({ theme, themeType }) =>
        themeType === 'dark' ? theme.dark.fontColor : theme.light.fontColor};
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    margin-top: 75px;
    font-size: 0.9rem;
    width: 21vw;
    height: 88vh;
    position: fixed;

    .menu-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 2px;
        cursor: pointer;
        transition: 0.2s;
    }
    .menu-item:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.sidebar.hover.backgroundColor
                : theme.light.sidebar.hover.backgroundColor};
        border-radius: 0 30px 30px 0;
    }
    /* selected menu item */
    .active {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.sidebar.selectedItemBackground
                : theme.light.sidebar.selectedItemBackground};
        border-radius: 0 30px 30px 0;
    }
    .active:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.sidebar.selectedItemBackground
                : theme.light.sidebar.selectedItemBackground};
        border-radius: 0 30px 30px 0;
    }

    .menu-item > * {
        margin: 12px 10px;
    }

    .menu-item > .icon {
        font-size: 1.45rem;
        margin-left: 20px;
    }

    @media (max-width: 800px) {
        width: 12vw;

        .menu-item {
            padding: 0;
        }
        .menu-item > .text {
            display: none;
        }
        .menu-item > .icon {
            margin-left: 15px;
        }
    }
`;

export default SidebarContainer;
