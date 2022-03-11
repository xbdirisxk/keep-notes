import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './InputField';
import GridNotes from './GridNotes';
import ArchiveNotes from './Archive';
import Trash from './Trash';

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
            <Route path='/archive' element={<ArchiveNotes />} />
            <Route path='/trash' element={<Trash />} />
        </Routes>
    );
};

export default Main;
