import React from 'react';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './InputNoteField';
import GridNotes from './GridNotes';

const Main = ({ themeType }) => {
    return (
        <MainContent>
            <InputNoteField themeType={themeType} />
            <GridNotes themeType={themeType} />
        </MainContent>
    );
};

export default Main;
