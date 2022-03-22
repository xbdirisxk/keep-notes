import React, { useContext } from 'react';
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
                <span>
                    <BiBellPlus />
                </span>
                <span>
                    <MdOutlineColorLens />
                </span>

                <span>
                    <BiArchiveOut onClick={() => handleArchive(note.id)} />
                </span>
                <span
                    className='delete-icon'
                    onClick={() => handleDelete(note.id)}
                >
                    <IoTrashOutline />
                </span>
                <span>
                    <IoMdMore />
                </span>
            </div>
        </NoteBox>
    );
};

export default Note;
