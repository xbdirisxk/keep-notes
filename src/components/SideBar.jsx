import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';
import SidebarContainer from '../styles/Sidebar.styled';
import { MdLightbulbOutline } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';
import { BiPencil, BiArchiveIn } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

const SideBar = () => {
    const [themeType] = useContext(ThemeContext);

    return (
        <SidebarContainer themeType={themeType}>
            <NavLink to='/' className='menu-item'>
                <MdLightbulbOutline className='icon' />
                <span className='text'>Notes</span>
            </NavLink>
            <div className='menu-item'>
                <AiOutlineBell className='icon' />
                <span className='text'>Reminders</span>
            </div>
            <div className='menu-item'>
                <BiPencil className='icon' />
                <span className='text'>Edit labels</span>
            </div>
            <NavLink to='/archive' className='menu-item'>
                <BiArchiveIn className='icon' />
                <span className='text'>Archive</span>
            </NavLink>
            <NavLink to='/trash' className='menu-item'>
                <BsTrash className='icon' />
                <span className='text'>Trash</span>
            </NavLink>
        </SidebarContainer>
    );
};

export default SideBar;
