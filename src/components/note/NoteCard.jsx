import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import NoteCard from './NoteCard.styled';
import { MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { ThemeContext } from '../../App';
import ColorPicker from './ColorPicker';

const Note = ({ note, view, handleOpen, handleDelete, handleArchive }) => {
    const [themeType] = useContext(ThemeContext);
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleShow = () => {
        showColorPicker ? setShowColorPicker(false) : setShowColorPicker(true);
    };

    return (
        <NoteCard
            className='note-box'
            themeType={themeType}
            view={view}
            bgColor={note.color}
        >
            <div onClick={() => handleOpen(note.id)} className='content'>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
            </div>
            <div className='icons'>
                <Tooltip>
                    <BiBellPlus />
                </Tooltip>
                <Tooltip onClick={handleShow}>
                    <MdOutlineColorLens />
                    {showColorPicker && (
                        <ColorPicker selectedNoteId={note.id} />
                    )}
                </Tooltip>
                <Tooltip onClick={() => handleArchive(note.id)}>
                    <BiArchiveOut />
                    <span className='tooltip-text'>archive</span>
                </Tooltip>

                <Tooltip
                    className='delete-icon'
                    onClick={() => handleDelete(note.id)}
                >
                    <IoTrashOutline />
                    <span className='tooltip-text'>delete</span>
                </Tooltip>
                <Tooltip>
                    <IoMdMore />
                </Tooltip>
            </div>
        </NoteCard>
    );
};

const Tooltip = styled.span`
    position: relative;
    display: inline-block;

    .tooltip-text {
        visibility: hidden;
        font-size: 0.8rem;
        font-weight: bold;
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

    &:hover .tooltip-text {
        visibility: visible;
    }
`;

export default Note;
