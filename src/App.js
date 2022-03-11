import React, { useState } from 'react';
import './app.css';

import GlobalStyle from './styles/Global.styled';

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
        <>
            <GlobalStyle themeType={themeType} />
            <Navbar themeToggler={themeToggler} themeType={themeType} />
            <div className='container'>
                <NotesProvider>
                    <SideBar themeType={themeType} />
                    <Main themeType={themeType} />
                </NotesProvider>
            </div>
        </>
    );
};

export default App;
