import React, { useContext } from 'react';
import styled from 'styled-components';
import { ArchiveContext } from '../context/NotesProvider';
import { MdOutlineUnarchive } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';

const ArchiveNotes = () => {
    const [archiveNote, setArchiveNote] = useContext(ArchiveContext);
    return (
        <Grid>
            {archiveNote.map((note) => (
                <div key={note.id} className='item'>
                    <h4>{note.title}</h4>
                    <p>{note.body}</p>
                    <div className='icons'>
                        <span className='icon'>
                            <MdOutlineUnarchive />
                        </span>
                        <span className='icon'>
                            <IoTrashOutline />
                        </span>
                    </div>
                </div>
            ))}
        </Grid>
    );
};

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .item {
        border: 2px solid gray;
        border-radius: 10px;
        padding: 5px 10px 0;
        margin: 10px;
        width: 200px;
    }

    .item > .icons {
        padding: 10px 0 0;
        font-size: 1.4rem;
    }
`;
export default ArchiveNotes;
