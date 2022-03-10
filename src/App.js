import React, { useState } from 'react';
import './app.css';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.styled';
import theme from './theme/Themes';
import Navbar from './components/Nav';
import SideBar from './components/SideBar';
import Main from './components/Main';

const App = () => {
    const [themeType, setThemeType] = useState('light');
    const [openModal, setOpen] = useState(false);

    const themeToggler = () => {
        themeType === 'light' ? setThemeType('dark') : setThemeType('light');
    };
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles themeType={themeType} />
                <Navbar themeToggler={themeToggler} themeType={themeType} />
                <Container>
                    <SideBar themeType={themeType} />
                    <Main
                        openModal={openModal}
                        setOpen={setOpen}
                        themeType={themeType}
                    />
                </Container>
            </>
        </ThemeProvider>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: 21vw 79vw;
`;
export default App;
