import React from 'react';
import MainContent from './styles/MainContent.styled';
import AddNoteField from './AddNoteField';

const Main = () => {
    return (
        <MainContent>
            <AddNoteField />
            <span>taking notes</span>
            <span>taking notes</span>
            <span>taking notes</span>
        </MainContent>
    );
};

export default Main;
