import React, { useContext } from 'react';
import styled from 'styled-components';
import NoteBox from '../styles/NoteBox.styled';
import { ArchiveContext } from '../context/NotesProvider';
import { MdOutlineUnarchive } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';
import { ThemeContext } from '../App';
import { NotesContext, TrashContext } from '../context/NotesProvider';

const ArchiveNotes = () => {
    const [themeType] = useContext(ThemeContext);
    const [notes, setNotes] = useContext(NotesContext);
    const [archiveNote, setArchiveNote] = useContext(ArchiveContext);
    const [trashNote, setTrashNote] = useContext(TrashContext);

    const unArchive = (id) => {
        const item = archiveNote.filter((note) => note.id === id)[0];
        const updateArchive = archiveNote.filter((note) => note.id !== id);
        setArchiveNote(updateArchive);
        setNotes([...notes, item]);
    };

    const moveToTrash = (id) => {
        const item = archiveNote.filter((note) => note.id === id)[0];
        const updateArchive = archiveNote.filter((note) => note.id !== id);
        setArchiveNote(updateArchive);
        setTrashNote([...trashNote, item]);
    };
    return (
        <Grid themeType={themeType}>
            {archiveNote.length ? (
                archiveNote.map((note) => (
                    <NoteBox
                        key={note.id}
                        className='item'
                        themeType={themeType}
                    >
                        <div className='content'>
                            <h4>{note.title}</h4>
                            <p>{note.body}</p>
                        </div>
                        <div className='icons'>
                            <span onClick={() => unArchive(note.id)}>
                                <MdOutlineUnarchive />
                            </span>
                            <span
                                className='delete-icon'
                                onClick={() => moveToTrash(note.id)}
                            >
                                <IoTrashOutline />
                            </span>
                        </div>
                    </NoteBox>
                ))
            ) : (
                <p>archive is empty</p>
            )}
        </Grid>
    );
};

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default ArchiveNotes;
