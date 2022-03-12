import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './InputField';
import GridNotes from './GridNotes';
import ArchiveNotes from './Archive';
import Trash from './Trash';
import { ArchiveNoteProvider } from '../context/NotesProvider';
import { NotesProvider } from '../context/NotesProvider';

const Main = () => {
    return (
        <MainContent>
            <NotesProvider>
                <Routes>
                    <Route
                        path='/keep-notes'
                        element={<Navigate replace to='/' />}
                    />
                    <Route
                        path='/'
                        element={
                            <>
                                <InputNoteField />
                                <GridNotes />
                            </>
                        }
                    />
                    <Route
                        path='/archive'
                        element={
                            <ArchiveNoteProvider>
                                <ArchiveNotes />
                            </ArchiveNoteProvider>
                        }
                    />
                    <Route path='/trash' element={<Trash />} />
                </Routes>
            </NotesProvider>
        </MainContent>
    );
};

export default Main;
