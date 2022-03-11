import React, { useState, createContext } from 'react';
import './app.css';
import GlobalStyle from './styles/Global.styled';
import Navbar from './components/Nav';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { NotesProvider } from './states/NotesProvider';

const ThemeContext = createContext('light');
const App = () => {
    const [themeType, setThemeType] = useState('light');

    return (
        <ThemeContext.Provider value={[themeType, setThemeType]}>
            <GlobalStyle themeType={themeType} />
            <Navbar />
            <div className='container'>
                <NotesProvider>
                    <SideBar />
                    <Main />
                </NotesProvider>
            </div>
        </ThemeContext.Provider>
    );
};

export { App, ThemeContext };
