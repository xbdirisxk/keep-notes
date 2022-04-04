import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Note from './NoteCard';
import NoteModal from './Modal';
import { NotesContext } from '../../context/NotesProvider';
import Masonry from 'react-masonry-css';
import emptyNotesImg from '../../assets/add_notes_undraw.svg';
import { ArchiveContext, TrashContext } from '../../context/NotesProvider';

const GridNotes = ({ view }) => {
    const [openModal, setOpenModal] = useState(false);
    const [modal, setModal] = useState(null);

    const [notes, setNotes] = useContext(NotesContext);
    const [archiveNote, setArchiveNote] = useContext(ArchiveContext);
    const [trashNote, setTrashNote] = useContext(TrashContext);

    const handleOpen = (id) => {
        const note = notes.filter((note) => note.id === id)[0];
        setModal(note);
        setOpenModal(true);
    };

    const handleArchive = (id) => {
        const item = notes.filter((note) => note.id === id)[0];
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes);
        setArchiveNote([...archiveNote, item]);
        setOpenModal(false);
    };

    const moveToTrash = (id) => {
        const item = notes.filter((note) => note.id === id)[0];
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes);
        setTrashNote([...trashNote, item]);
        setOpenModal(false);
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
                view === 'grid' ? (
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className='my-masonry-grid'
                        columnClassName='my-masonry-grid_column'
                    >
                        {notes.map((note) => (
                            <Note
                                key={note.id}
                                note={note}
                                view={view}
                                handleOpen={handleOpen}
                                handleArchive={handleArchive}
                                handleDelete={moveToTrash}
                            />
                        ))}
                    </Masonry>
                ) : (
                    <ListView>
                        {notes.map((note) => (
                            <Note
                                key={note.id}
                                note={note}
                                view={view}
                                handleOpen={handleOpen}
                                handleArchive={handleArchive}
                                handleDelete={moveToTrash}
                            />
                        ))}
                    </ListView>
                )
            ) : (
                <Image
                    src={emptyNotesImg}
                    alt='add notes'
                    className='empty-notes-image'
                />
            )}
            <NoteModal
                open={openModal}
                setOpen={setOpenModal}
                modal={modal}
                handleArchive={handleArchive}
                handleDelete={moveToTrash}
            />
        </>
    );
};

const ListView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 6px;
`;

const Image = styled.img`
    height: 350px;
    max-width: 500px;
    margin: 30px;
    pointer-events: none;
`;
export default GridNotes;
