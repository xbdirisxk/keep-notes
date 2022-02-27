import React from 'react';
import styled from 'styled-components';

const AddNoteField = ({ notes, setNotes }) => {
    const handleAdding = (event) => {
        event.preventDefault();
        setNotes([
            ...notes,
            {
                id: Math.random() * 1000000,
                title: event.target.title.value,
                body: event.target.body.value,
            },
        ]);
    };

    return (
        <InputField>
            <form className='text-inputs' onSubmit={handleAdding}>
                <input
                    type='text'
                    placeholder='title'
                    name='title'
                    className='input-title-field'
                />
                <input
                    type='text'
                    placeholder='Take a note...'
                    name='body'
                    className='input-note-field'
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
`;

export default AddNoteField;
