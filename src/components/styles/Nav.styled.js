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
        background-color: hsl(0, 0%, 90%);
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
        opacity: 0.7;
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
        background-color: hsl(0, 0%, 95%);
        padding: 14px 50px;
        border: 1px;
        border-radius: 10px;
        width: 90%;
        color: hsl(0, 0%, 40%);
    }
    .search-box:focus {
        box-shadow: 0 0 2px 2px lightgray;
        color: hsl(0, 0%, 20%);
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
        background-color: aqua;
    }

    /* responsive to 800px width */

    @media (max-width: 800px) {
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
