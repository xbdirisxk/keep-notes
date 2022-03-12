import React, { useContext } from 'react';
import styled from 'styled-components';
import NoteBox from '../styles/NoteBox.styled';
import { MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { ThemeContext } from '../App';

const Note = ({ note, handleOpen, handleDelete }) => {
    const [themeType] = useContext(ThemeContext);

    return (
        <NoteBox className='note-box' themeType={themeType}>
            <div onClick={() => handleOpen(note.id)} className='content'>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
            </div>
            <div className='icons'>
                <span>
                    <BiBellPlus />
                </span>
                <span>
                    <MdOutlineColorLens />
                </span>

                <span>
                    <BiArchiveOut />
                </span>
                <span onClick={() => handleDelete(note.id)}>
                    <IoTrashOutline />
                </span>
                <span>
                    <IoMdMore />
                </span>
            </div>
        </NoteBox>
    );
};

const Icons = styled.div`
    /* display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 0 0 3px;
    font-size: 1.2rem;
    margin-right: 5px;

    & > * {
        margin-left: 10px;
        padding: 2px;
        border-radius: 30px;
        padding: 6px 6px 1px;
        transition: 0.2s;
    }
    & > *:hover {
        background-color: ${({ theme, themeType }) =>
        themeType === 'light'
            ? 'hsl(56, 45%, 80%)'
            : theme.dark.icons.hover.backgroundColor};

        cursor: pointer;
    } */
`;
export default Note;
