import styled from 'styled-components';

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 23px;
    width: 78vw;
    margin: 75px 0 0 21vw;

    @media (max-width: 600px) {
        margin-left: 15vw;
    }
`;

export default MainContent;
