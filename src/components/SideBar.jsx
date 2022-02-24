import React from 'react';
import SidebarContainer from './styles/Sidebar.styled';
import { MdLightbulbOutline } from 'react-icons/md';
import { AiOutlineBell } from 'react-icons/ai';
import { BiPencil, BiArchiveIn } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';

const SideBar = () => {
    return (
        <SidebarContainer>
            <div>
                <MdLightbulbOutline className='icon' />
                <span>Notes</span>
            </div>
            <div>
                <AiOutlineBell className='icon' />
                <span>Reminders</span>
            </div>
            <div>
                <BiPencil className='icon' />
                <span>Edit labels</span>
            </div>
            <div>
                <BiArchiveIn className='icon' />
                <span>Archive</span>
            </div>
            <div>
                <BsTrash className='icon' />
                <span>Trash</span>
            </div>
        </SidebarContainer>
    );
};

export default SideBar;