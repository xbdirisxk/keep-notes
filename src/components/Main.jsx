import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './InputField';
import GridNotes from './GridNotes';
import ArchiveNotes from './Archive';
import Trash from './Trash';
import { NotesProvider } from '../context/NotesProvider';
import { ArchiveNoteProvider } from '../context/NotesProvider';
import { TrashNoteProvider } from '../context/NotesProvider';

const Main = () => {
    return (
        <MainContent>
            <NotesProvider>
                <ArchiveNoteProvider>
                    <TrashNoteProvider>
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
                            <Route path='/archive' element={<ArchiveNotes />} />
                            <Route path='/trash' element={<Trash />} />
                        </Routes>
                    </TrashNoteProvider>
                </ArchiveNoteProvider>
            </NotesProvider>
        </MainContent>
    );
};

export default Main;
