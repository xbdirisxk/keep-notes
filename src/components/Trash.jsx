import React, { useContext } from 'react';
import styled from 'styled-components';
import { TrashContext, NotesContext } from '../context/NotesProvider';
import NoteBox from '../styles/NoteBox.styled';
import { ThemeContext } from '../App';
import { FaTrashRestore } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const Trash = () => {
    const [themeType] = useContext(ThemeContext);
    const [trashNote, setTrashNote] = useContext(TrashContext);
    const [notes, setNotes] = useContext(NotesContext);

    const restoreNote = (id) => {
        const item = trashNote.filter((note) => note.id === id)[0];
        const updateTrash = trashNote.filter((note) => note.id !== id);
        setTrashNote(updateTrash);
        setNotes([...notes, item]);
        setTrashNote(updateTrash);
    };

    const deleteForEver = (id) => {
        const updateTrash = trashNote.filter((note) => note.id !== id);
        setTrashNote(updateTrash);
    };

    return (
        <Grid themeType={themeType}>
            {trashNote.map((note) => (
                <NoteBox key={note.id} className='item' themeType={themeType}>
                    <div className='content'>
                        <h4>{note.title}</h4>
                        <p>{note.body}</p>
                    </div>
                    <div className='icons'>
                        <span onClick={() => restoreNote(note.id)}>
                            <FaTrashRestore />
                        </span>
                        <span className='delete-icon'>
                            <RiDeleteBin2Fill
                                onClick={() => deleteForEver(note.id)}
                            />
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
    .icons {
        font-size: 1.4rem;
    }
`;

export default Trash;
