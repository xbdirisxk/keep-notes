import React, { useState, useContext } from 'react';
import Note from './Note';
import NoteModal from './Modal';
import { NotesContext } from '../states/NotesProvider';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import emptyNotesImg from '../assets/add_notes_undraw.svg';

const GridNotes = () => {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(null);
    const [notes, setNotes] = useContext(NotesContext);

    const handleOpen = (id) => {
        const note = notes.filter((note) => note.id === id)[0];
        setModal(note);
        setOpen(true);
    };

    const handleDelete = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        setOpen(false);
    };

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        810: 2,
        750: 1,
    };
    return (
        <>
            {notes.length ? (
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className='my-masonry-grid'
                    columnClassName='my-masonry-grid_column'
                >
                    {notes.map((note) => (
                        <Note
                            key={note.id}
                            note={note}
                            handleOpen={handleOpen}
                            handleDelete={handleDelete}
                        />
                    ))}
                </Masonry>
            ) : (
                <Image
                    src={emptyNotesImg}
                    alt='add notes'
                    className='empty-notes-image'
                />
            )}
            <NoteModal
                open={open}
                setOpen={setOpen}
                modal={modal}
                handleDelete={handleDelete}
            />
        </>
    );
};

const Image = styled.img`
    height: 350px;
    max-width: 500px;
    margin: 30px;
    pointer-events: none;
`;
export default GridNotes;
