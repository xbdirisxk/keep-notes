import React from 'react';
import { MdOutlineDeleteForever, MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';

const Note = ({ note, handleOpen, handleDelete }) => {
    return (
        <div className='note-box'>
            <div onClick={() => handleOpen(note.id)}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
            </div>
            <div className='icons'>
                <span>
                    <BiArchiveOut />
                </span>
                <span>
                    <MdOutlineColorLens />
                </span>
                <span>
                    <BiBellPlus />
                </span>
                <span onClick={() => handleDelete(note.id)}>
                    <MdOutlineDeleteForever />
                </span>
                <span>
                    <IoMdMore />
                </span>
            </div>
        </div>
    );
};

export default Note;
