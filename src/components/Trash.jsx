import React, { useContext } from 'react';
import styled from 'styled-components';
import { TrashContext, NotesContext } from '../context/NotesProvider';
import NoteBox from '../styles/NoteBox.styled';
import { ThemeContext } from '../App';
import { FaTrashRestore } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';

const Trash = () => {
    const [themeType] = useContext(ThemeContext);
    const [trashNotes, setTrashNote] = useContext(TrashContext);
    const [notes, setNotes] = useContext(NotesContext);

    const restoreNote = (id) => {
        const item = trashNotes.filter((note) => note.id === id)[0];
        const updateTrash = trashNotes.filter((note) => note.id !== id);
        setTrashNote(updateTrash);
        setNotes([...notes, item]);
    };

    const deleteForEver = (id) => {
        const updateTrash = trashNotes.filter((note) => note.id !== id);
        setTrashNote(updateTrash);
    };

    const emptyTrash = (id) => {
        setTrashNote([]);
    };
    return (
        <>
            <Button themeType={themeType} onClick={emptyTrash}>
                empty trash
            </Button>
            <Grid themeType={themeType}>
                {trashNotes.length ? (
                    trashNotes.map((note) => (
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
                    ))
                ) : (
                    <p>trash is empty</p>
                )}
            </Grid>
        </>
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
const Button = styled.button`
    background-color: ${({ themeType }) =>
        themeType === 'dark' ? 'hsl(0, 0%, 26%)' : 'hsl(0, 0%, 96%)'};
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 8px;
    font-weight: bold;
    color: ${({ themeType }) => (themeType === 'dark' ? 'yellow' : 'brown')};
    transition: 0.2s;

    &:hover {
        background-color: ${({ themeType }) =>
            themeType === 'dark' ? 'hsl(0, 0%, 15%)' : 'hsl(0, 0%, 90%)'};
    }
`;

export default Trash;
