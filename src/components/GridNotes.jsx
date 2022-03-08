import React from 'react';
import NoteModal from './NoteModal';
import Note from './Note';
import styled from 'styled-components';
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
                <Image
                    src={emptyNotesIcon}
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

const Image = styled.img`
    height: 350px;
    max-width: 500px;
    margin: 30px;
    pointer-events: none;
`;
export default GridNotes;
