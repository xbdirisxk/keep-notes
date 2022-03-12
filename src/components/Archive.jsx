import React, { useContext } from 'react';
import styled from 'styled-components';
import NoteBox from '../styles/NoteBox.styled';
import { ArchiveContext } from '../context/NotesProvider';
import { MdOutlineUnarchive } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';
import { ThemeContext } from '../App';

const ArchiveNotes = () => {
    const [archiveNote] = useContext(ArchiveContext);
    const [themeType] = useContext(ThemeContext);

    return (
        <Grid themeType={themeType}>
            {archiveNote.map((note) => (
                <NoteBox key={note.id} className='item' themeType={themeType}>
                    <div className='content'>
                        <h4>{note.title}</h4>
                        <p>{note.body}</p>
                    </div>
                    <div className='icons'>
                        <span className='icon'>
                            <MdOutlineUnarchive />
                        </span>
                        <span className='icon'>
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
