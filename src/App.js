import React, { useState } from 'react';
import './app.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/Global.styled';
import theme from './theme/Themes';
import Navbar from './components/Nav';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { NotesProvider } from './states/NotesProvider';

const App = () => {
    const [themeType, setThemeType] = useState('light');

    const themeToggler = () => {
        themeType === 'light' ? setThemeType('dark') : setThemeType('light');
    };
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles themeType={themeType} />
                <Navbar themeToggler={themeToggler} themeType={themeType} />
                <div className='container'>
                    <NotesProvider>
                        <SideBar themeType={themeType} />
                        <Main themeType={themeType} />
                    </NotesProvider>
                </div>
            </>
        </ThemeProvider>
    );
};

export default App;
