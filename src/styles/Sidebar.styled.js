import styled from 'styled-components';

const SidebarContainer = styled.div`
    background-color: ${({ theme, themeType }) =>
        themeType === 'light' ? '#fff' : theme.dark.background};
    color: ${({ theme, themeType }) =>
        themeType === 'light' ? '#000' : theme.dark.fontColor};
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
        color: #000;
        cursor: pointer;
        transition: 0.2s;
    }
    .menu-item:first-child {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light'
                ? '#feefc3'
                : theme.dark.sidebar.selectedItemBackground};
        border-radius: 0 30px 30px 0;
    }
    .menu-item:nth-child(1n + 2):hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'light'
                ? 'hsl(0, 0%, 90%)'
                : theme.dark.sidebar.hover.backgroundColor};
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
