import React from 'react';
import MainContent from './styles/MainContent.styled';
import AddNoteField from './AddNoteField';
import GridNotes from './GridNotes';

const Main = () => {
    return (
        <MainContent>
            <AddNoteField />
            <GridNotes />
        </MainContent>
    );
};

export default Main;
