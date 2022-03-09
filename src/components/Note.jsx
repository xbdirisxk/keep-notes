import React from 'react';
import styled from 'styled-components';
import { MdOutlineDeleteForever, MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';

const Note = ({ note, handleOpen, handleDelete }) => {
    return (
        <NoteItem className='note-box'>
            <div onClick={() => handleOpen(note.id)} className='content'>
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
        </NoteItem>
    );
};

const NoteItem = styled.div`
    text-align: left;
    margin: 10px;
    line-height: 1.3rem;
    border-radius: 10px;
    box-shadow: 0 0 1px 1px hsl(0, 0%, 83%);
    width: 230px;
    max-height: 450px;
    overflow: hidden;
    transition: 0.3s;

    &:hover {
        cursor: default;
        box-shadow: 0 0 5px 2.2px hsl(0, 0%, 83%);
    }
    .content {
        padding: 4px 16px 2px;
        cursor: pointer;
    }
    .content > * {
        padding: 4px 0;
    }
    .icons {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        padding: 0 0 3px;
        font-size: 1.2rem;
        margin-right: 5px;
    }
    .icons > * {
        margin-left: 10px;
        padding: 2px;
        border-radius: 30px;
        padding: 6px 6px 1px;
        transition: 0.2s;
    }
    .icons > *:hover {
        background-color: hsl(56, 45%, 80%);
        cursor: pointer;
    }

    /* responsice */
    @media (max-width: 750px) {
        width: 70vw;

        .content {
            font-size: 1.2rem;
            line-height: 1.5rem;
            min-height: 23vh;
        }
        .content > * {
            padding: 7px 0;
        }
    }
`;
export default Note;