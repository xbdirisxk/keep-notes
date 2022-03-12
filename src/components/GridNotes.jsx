import React, { useState, useContext } from 'react';
import Note from './Note';
import NoteModal from './Modal';
import { NotesContext } from '../context/NotesProvider';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import emptyNotesImg from '../assets/add_notes_undraw.svg';
import { ArchiveContext, TrashContext } from '../context/NotesProvider';

const GridNotes = () => {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(null);

    const [notes, setNotes] = useContext(NotesContext);
    const [archiveNote, setArchiveNote] = useContext(ArchiveContext);
    const [trashNote, setTrashNote] = useContext(TrashContext);

    const handleOpen = (id) => {
        const note = notes.filter((note) => note.id === id)[0];
        setModal(note);
        setOpen(true);
    };

    const handleArchive = (id) => {
        const item = notes.filter((note) => note.id === id)[0];
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes);
        setArchiveNote([...archiveNote, item]);
        setOpen(false);
    };

    const moveToTrash = (id) => {
        const item = notes.filter((note) => note.id === id)[0];
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes);
        setTrashNote([...trashNote, item]);
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
                            handleArchive={handleArchive}
                            handleDelete={moveToTrash}
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
                handleArchive={handleArchive}
                handleDelete={moveToTrash}
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
