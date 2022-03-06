import React from 'react';
import Masonry from 'react-masonry-css';
import NoteModal from './NoteModal';
import { MdOutlineDeleteForever, MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';

const GridNotes = ({
    notes,
    setNotes,
    openModal,
    setOpen,
    modal,
    setModal,
}) => {
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
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className='my-masonry-grid'
                columnClassName='my-masonry-grid_column'
            >
                {notes.map((note) => (
                    <div key={note.id} className='note-box'>
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
                ))}
            </Masonry>
            <NoteModal
                open={openModal}
                setOpen={setOpen}
                modal={modal}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default GridNotes;
