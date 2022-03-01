import { useState } from 'react';
import './app.css';
import styled from 'styled-components';
import Navbar from './components/Nav';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
    const [openModal, setOpen] = useState(false);

    return (
        <>
            <Navbar />
            <Container>
                <SideBar />
                <Main openModal={openModal} setOpen={setOpen} />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 21vw 79vw;
`;
export default App;
