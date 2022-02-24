import styled from 'styled-components';

const SidebarContainer = styled.div`
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    margin-top: 75px;
    font-size: 1rem;
    height: 88vh;

    div:first-child {
        background-color: #feefc3;
        border-end-end-radius: 30px;
        border-start-end-radius: 30px;
    }
    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    div > * {
        margin: 12px 10px;
    }

    div > .icon {
        font-size: 1.4rem;
        margin-left: 17px;
    }
`;

export default SidebarContainer;
