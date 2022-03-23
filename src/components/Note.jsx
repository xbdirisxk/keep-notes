import React, { useContext } from 'react';
import styled from 'styled-components';
import NoteBox from '../styles/NoteBox.styled';
import { MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { ThemeContext } from '../App';

const Note = ({ note, view, handleOpen, handleDelete, handleArchive }) => {
    const [themeType] = useContext(ThemeContext);

    return (
        <NoteBox className='note-box' themeType={themeType} view={view}>
            <div onClick={() => handleOpen(note.id)} className='content'>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
            </div>
            <div className='icons'>
                <Tooltip>
                    <BiBellPlus />
                </Tooltip>
                <Tooltip>
                    <MdOutlineColorLens />
                </Tooltip>
                <Tooltip onClick={() => handleArchive(note.id)}>
                    <BiArchiveOut />
                    <span className='tooltiptext'>archive</span>
                </Tooltip>

                <Tooltip
                    className='delete-icon'
                    onClick={() => handleDelete(note.id)}
                >
                    <IoTrashOutline />
                    <span className='tooltiptext'>delete</span>
                </Tooltip>
                <Tooltip>
                    <IoMdMore />
                </Tooltip>
            </div>
        </NoteBox>
    );
};

const Tooltip = styled.span`
    position: relative;
    display: inline-block;

    .tooltiptext {
        visibility: hidden;
        font-size: 0.9rem;
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 3px 0;
        border-radius: 6px;
        width: 60px;
        opacity: 0.6;
        transition-delay: 0.1s;

        /* Position the tooltip text */
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: 10px;
        margin-left: -30px;
        z-index: 10;
    }

    &:hover .tooltiptext {
        visibility: visible;
    }
`;

export default Note;
