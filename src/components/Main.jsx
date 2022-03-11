import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './InputField';
import GridNotes from './GridNotes';
import ArchiveNotes from './Archive';

const Main = () => {
    return (
        <Routes>
            <Route path='/keep-notes' element={<Navigate replace to='/' />} />
            <Route
                path='/'
                element={
                    <MainContent>
                        <InputNoteField />
                        <GridNotes />
                    </MainContent>
                }
            />
            <Route
                path='/archive'
                element={
                    <MainContent>
                        <ArchiveNotes />
                    </MainContent>
                }
            />
        </Routes>
    );
};

export default Main;
