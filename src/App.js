import React, { useState, createContext } from 'react';
import './app.css';
import GlobalStyle from './styles/Global.styled';
import Navbar from './components/nav/Nav';
import SideBar from './components/sidebar/SideBar';
import Main from './components/Main';

const ThemeContext = createContext('light');
const App = () => {
    const [themeType, setThemeType] = useState('light');
    const [view, setView] = useState('grid');

    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <ThemeContext.Provider value={[themeType, setThemeType]}>
            <GlobalStyle themeType={themeType} />
            <Navbar
                view={view}
                setView={setView}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className='container'>
                <SideBar show={showSidebar} />
                <Main view={view} showSidebar={showSidebar} />
            </div>
        </ThemeContext.Provider>
    );
};

export { App, ThemeContext };
