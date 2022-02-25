import React from 'react';
import styled from 'styled-components';

const AddNoteField = () => {
    return (
        <InputField>
            <div className='text-inputs'>
                <input type='text' placeholder='title' />
                <input type='text' placeholder='Take a note...' />
            </div>
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
    }

    input:first-of-type {
        width: 100%;
        padding: 10px 15px;
    }
    input:last-of-type {
        font-size: 1rem;
        width: 100%;
        padding: 10px 15px;
    }
`;

export default AddNoteField;
