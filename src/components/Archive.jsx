import React, { useContext } from 'react';
import styled from 'styled-components';
import { ArchiveContext } from '../context/NotesProvider';

const ArchiveNotes = () => {
    const [archiveNote, setArchiveNote] = useContext(ArchiveContext);
    console.log(archiveNote);
    return (
        <Grid>
            {archiveNote.map((note) => (
                <div key={note.id} className='item'>
                    <h4>{note.title}</h4>
                    <p>{note.body}</p>
                </div>
            ))}
        </Grid>
    );
};

const Grid = styled.div`
    background-color: yellow;
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .item {
        border: 1px solid gray;
        padding: 10px;
        margin: 10px;
        width: 200px;
    }
`;
export default ArchiveNotes;
