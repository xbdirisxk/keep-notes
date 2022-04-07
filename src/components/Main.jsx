import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './input-field/InputField';
import GridNotes from './note/GridNotes';
import ArchiveNotes from './pages/Archive';
import Trash from './pages/Trash';
import NotesProvider from '../context/NotesProvider';
import { ArchiveNoteProvider } from '../context/NotesProvider';
import { TrashNoteProvider } from '../context/NotesProvider';

const Main = ({ view, showSidebar }) => {
    return (
        <MainContent sidebarVisible={showSidebar}>
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
                                        <GridNotes
                                            view={view}
                                            sidebarVisible={showSidebar}
                                        />
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
