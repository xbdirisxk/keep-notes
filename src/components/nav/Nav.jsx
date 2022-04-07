import React, { useContext } from 'react';
import Nav from './Nav.styled';
import LogoImg from '../../assets/keep_logo.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { CgDarkMode } from 'react-icons/cg';
import { SiRobotframework } from 'react-icons/si';
import { BsViewStacked, BsGrid1X2 } from 'react-icons/bs';
import { ThemeContext } from '../../App';

const Navbar = ({ view, setView, showSidebar, setShowSidebar }) => {
    const [themeType, setThemeType] = useContext(ThemeContext);

    const themeToggler = () => {
        themeType === 'light' ? setThemeType('dark') : setThemeType('light');
    };

    const ViewToggler = () => {
        view === 'grid' ? setView('list') : setView('grid');
    };

    const toggleSidebar = () => {
        showSidebar ? setShowSidebar(false) : setShowSidebar(true);
    };

    return (
        <Nav themeType={themeType}>
            <div className='logo'>
                <span className='menu-icon icon' onClick={toggleSidebar}>
                    <FiMenu />
                </span>
                <img
                    src={LogoImg}
                    alt='logo'
                    style={{ width: 40, height: 40 }}
                />
                <span className='logo-name'>Keep</span>
            </div>
            <div className='search-field'>
                <span className='search-icon icon'>
                    <AiOutlineSearch />
                </span>
                <input
                    type='text'
                    placeholder='Search'
                    className='search-box'
                />
            </div>
            <div className='nav-menu'>
                <div>
                    <span className='icon' onClick={ViewToggler}>
                        {view === 'grid' ? <BsViewStacked /> : <BsGrid1X2 />}
                    </span>
                    <span className='icon'>
                        <AiOutlineSetting />
                    </span>
                </div>

                <div>
                    <span className='icon' onClick={themeToggler}>
                        <CgDarkMode />
                    </span>
                    <span className='robot icon'>
                        <SiRobotframework />
                    </span>
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
