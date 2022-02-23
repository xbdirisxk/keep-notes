import React from 'react';
import Nav from './styles/Nav.styled';
import imgLogo from './assets/keep_logo.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai';
import { TiThMenuOutline } from 'react-icons/ti';
import { CgMenuGridO } from 'react-icons/cg';
import { SiRobotframework } from 'react-icons/si';
// import {AiOutlineAppstore} from 'react-icons/ai';

const Navbar = () => {
    return (
        <Nav>
            <div className='logo'>
                <FiMenu className='menu-icon' />
                <img
                    src={imgLogo}
                    alt='logo'
                    style={{ width: 40, height: 40 }}
                />
                <span>Keep</span>
            </div>
            <div className='search-bar'>
                <AiOutlineSearch className='search-icon' />
                <input
                    type='text'
                    placeholder='Search'
                    className='search-box'
                />
            </div>
            <div className='nav-menu'>
                <div>
                    <TiThMenuOutline />
                    <AiOutlineSetting />
                </div>

                <div>
                    <CgMenuGridO />
                    <SiRobotframework />
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
