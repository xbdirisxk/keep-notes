import React, { useState } from 'react';
import styled from 'styled-components';

const AddNoteField = ({ notes, setNotes }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleAdd = (event) => {
        event.preventDefault();

        if (!title) {
            alert('please make note title');
            return;
        }

        setNotes([
            ...notes,
            {
                id: Math.random() * 1000000,
                title,
                body,
            },
        ]);
        setTitle('');
        setBody('');
    };

    return (
        <InputField>
            <form className='text-inputs' onSubmit={handleAdd}>
                <input
                    type='text'
                    placeholder='title'
                    className='input-title-field'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Take a note...'
                    className='input-note-field'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <button type='submit'></button>
            </form>
        </InputField>
    );
};

const InputField = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    padding: 5px;
    width: 80%;

    .text-inputs {
        width: 80%;
        border-radius: 8px;
        box-shadow: 0 1px 3px 2px lightgray;
        padding: 5px;
        color: hsl(0, 0%, 30%);
    }

    .input-title-field {
        width: 100%;
        padding: 10px 15px;
    }
    .input-note-field {
        font-size: 1rem;
        width: 100%;
        padding: 10px 15px;
    }
    input:focus {
        color: #000;
    }

    @media (max-width: 800px) {
        width: 90vw;
    }
`;

export default AddNoteField;
