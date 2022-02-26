import React, { useState } from 'react';
import MainContent from './styles/MainContent.styled';
import AddNoteField from './AddNoteField';
import GridNotes from './GridNotes';

const Main = () => {
    const [notes, setNotes] = useState([
        {
            title: 'sleeping early',
            body: 'as my mom says if you sleep early then you will wake up early',
        },
    ]);
    return (
        <MainContent>
            <AddNoteField setNotes={setNotes} />
            <GridNotes notes={notes} />
        </MainContent>
    );
};

export default Main;
