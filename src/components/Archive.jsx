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
    const [archiveNote, setArchiveNote] = useContext(ArchiveContext);
    const [notes, setNotes] = useContext(NotesContext);
    const [trashNote, setTrashNote] = useContext(TrashContext);

    const unArchive = (id) => {
        const item = archiveNote.filter((note) => note.id === id)[0];
        const updateArchive = archiveNote.filter((note) => note.id !== id);
        setArchiveNote(updateArchive);
        setNotes([...notes, item]);
    };

    const moveToTrash = (id) => {
        console.log('note:', notes);
        const item = notes.filter((note) => note.id === id)[0];
        const updateNotes = notes.filter((note) => note.id !== id);
        setNotes(updateNotes);
        setTrashNote([...trashNote, item]);
    };
    return (
        <Grid themeType={themeType}>
            {archiveNote.map((note) => (
                <NoteBox key={note.id} className='item' themeType={themeType}>
                    <div className='content'>
                        <h4>{note.title}</h4>
                        <p>{note.body}</p>
                    </div>
                    <div className='icons' onClick={() => unArchive(note.id)}>
                        <span>
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
            ))}
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
