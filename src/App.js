import './components/styles/global-styles.css';
import './components/styles/masonry-grid.css';
import styled from 'styled-components';
import Navbar from './components/Nav';

import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <SideBar />
                <Main />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 21vw 79vw;
`;
export default App;
