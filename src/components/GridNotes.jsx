import React from 'react';
import NoteModal from './NoteModal';
import Note from './Note';
import Masonry from 'react-masonry-css';
import emptyNotesIcon from './assets/add_notes_undraw.svg';

const GridNotes = ({ notes, ...props }) => {
    const handleOpen = (id) => {
        const note = notes.filter((note) => note.id === id)[0];
        props.setModal(note);
        props.setOpen(true);
    };

    const handleDelete = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        props.setNotes(newNotes);
        props.setOpen(false);
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
                <img
                    src={emptyNotesIcon}
                    width={500}
                    height={350}
                    alt='add notes'
                    className='empty-notes-image'
                />
            )}
            <NoteModal
                open={props.openModal}
                setOpen={props.setOpen}
                modal={props.modal}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default GridNotes;
