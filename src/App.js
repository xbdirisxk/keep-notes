import React, { useState, createContext } from 'react';
import './app.css';
import GlobalStyle from './styles/Global.styled';
import Navbar from './components/Nav';
import SideBar from './components/SideBar';
import Main from './components/Main';

const ThemeContext = createContext('light');
const App = () => {
    const [themeType, setThemeType] = useState('light');
    const [view, setView] = useState('grid'); // list

    return (
        <ThemeContext.Provider value={[themeType, setThemeType]}>
            <GlobalStyle themeType={themeType} />
            <Navbar view={view} setView={setView} />
            <div className='container'>
                <SideBar />
                <Main view={view} />
            </div>
        </ThemeContext.Provider>
    );
};

export { App, ThemeContext };
