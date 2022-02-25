import React from 'react';
import styled from 'styled-components';

const AddNoteField = () => {
    return (
        <InputField>
            <input type='text' placeholder='Take a note...' />
        </InputField>
    );
};

const InputField = styled.div`
    font-size: 1.2rem;
    padding: 5px;
    width: 80%;

    input {
        width: 80%;
        border: 1px;
        border-radius: 8px;
        box-shadow: 0 1px 3px 2px lightgray;
        padding: 10px 15px;
    }
`;

export default AddNoteField;
