import React from 'react';
import Masonry from 'react-masonry-css';
import NoteModal from './NoteModal';

const GridNotes = ({ notes, openModal, setOpen, modal, setModal }) => {
    const handleOpen = (id) => {
        const note = notes.filter((note) => note.id === id)[0];
        setModal(note);
        setOpen(true);
    };

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1,
    };
    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {notes.map((note) => (
                    <div key={note.id} onClick={() => handleOpen(note.id)}>
                        <h4>{note.title}</h4>
                        <p>{note.body}</p>
                    </div>
                ))}
            </Masonry>
            <NoteModal open={openModal} setOpen={setOpen} modal={modal} />
        </>
    );
};

export default GridNotes;
