import React, { useState, useContext } from 'react';
import { NotesContext } from '../../context/NotesProvider';
import InputContainer from './InputField.styled';
import { ThemeContext } from '../../App';

const AddNoteField = () => {
    const [notes, setNotes] = useContext(NotesContext);
    const [themeType] = useContext(ThemeContext);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleAdd = (event) => {
        event.preventDefault();

        if (!title) {
            alert('please add note title');
            return;
        }

        setNotes([
            ...notes,
            {
                id: Math.random() * 1000000,
                color: 'white',
                title,
                body,
            },
        ]);
        setTitle('');
        setBody('');
    };

    return (
        <InputContainer themeType={themeType}>
            <form className='form' onSubmit={handleAdd}>
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
        </InputContainer>
    );
};

export default AddNoteField;
