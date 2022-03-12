import React, { useContext } from 'react';
import styled from 'styled-components';
import { TrashContext } from '../context/NotesProvider';
import NoteBox from '../styles/NoteBox.styled';
import { ThemeContext } from '../App';
import { MdOutlineDeleteForever, MdRestoreFromTrash } from 'react-icons/md';

const Trash = () => {
    const [trashNotes] = useContext(TrashContext);
    const [themeType] = useContext(ThemeContext);

    return (
        <Grid themeType={themeType}>
            {trashNotes.map((note) => (
                <NoteBox key={note.id} className='item' themeType={themeType}>
                    <div className='content'>
                        <h4>{note.title}</h4>
                        <p>{note.body}</p>
                    </div>
                    <div className='icons'>
                        <span className='icon'>
                            <MdRestoreFromTrash />
                        </span>
                        <span className='icon'>
                            <MdOutlineDeleteForever />
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

export default Trash;
