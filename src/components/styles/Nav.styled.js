import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #fff;
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

    .logo {
        width: 15%;
    }
    .search-bar {
        width: 65%;
    }
    .nav-menu {
        width: 20%;
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
        margin: 5px;
        margin-right: 15px;
    }
    .logo > span {
        font-size: 1.35rem;
        margin: 5px;
        opacity: 0.7;
    }

    /* search bar */

    .search-bar {
        display: flex;
        justify-items: center;
        align-items: center;
    }
    .search-icon {
        font-size: 1.35rem;
        position: absolute;
        margin-left: 15px;
        opacity: 0.8;
    }
    .search-bar > .search-box {
        background-color: hsl(0, 0%, 95%);
        padding: 14px 50px;
        border: 1px;
        border-radius: 10px;
        width: 90%;
    }

    /* menu */
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.4rem;
    }
    .nav-menu > div {
        flex: 1;
        padding: 0 10px;
    }
    .nav-menu > div > * {
        margin: 0 7px;
    }
`;

export default Nav;
