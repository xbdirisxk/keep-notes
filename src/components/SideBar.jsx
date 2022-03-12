import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/' className='menu-item'>
                <MdLightbulbOutline className='icon' />
                <span className='text'>Notes</span>
            </Link>
            <Link to='/' className='menu-item'>
                <AiOutlineBell className='icon' />
                <span className='text'>Reminders</span>
            </Link>
            <Link to='/' className='menu-item'>
                <BiPencil className='icon' />
                <span className='text'>Edit labels</span>
            </Link>
            <Link to='/archive' className='menu-item'>
                <BiArchiveIn className='icon' />
                <span className='text'>Archive</span>
            </Link>
            <Link to='/trash' className='menu-item'>
                <BsTrash className='icon' />
                <span className='text'>Trash</span>
            </Link>
        </SidebarContainer>
    );
};

export default SideBar;
