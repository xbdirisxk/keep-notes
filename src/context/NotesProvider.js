import React, { useState, createContext } from 'react';

const NotesContext = createContext([]);

export const NotesProvider = (props) => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'fact',
            body: 'The world’s oldest wooden wheel has been around for more than 5,000 years',
        },
        {
            id: 2,
            title: 'sleeping early',
            body: '2015 research proof that those who sleep early and wake up early are more productive than those who sleep late at night',
        },

        {
            id: 3,
            title: 'fun fact',
            body: 'Steve Jobs, Steve Wozniak, and Ron Wayne started Apple Inc. on April Fools’ Day',
        },
    ]);

    return (
        <NotesContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    );
};

/*  archive notes function */

const ArchiveContext = createContext([]);

export const ArchiveNoteProvider = (props) => {
    const [archiveNotes, setArchiveNotes] = useState([
        {
            id: 1,
            title: 'fact',
            body: 'The world’s oldest wooden wheel has been around for more than 5,000 years',
        },
        {
            id: 10,
            title: 'fact',
            body: 'The world’s oldest wooden wheel has been around for more than 5,000 years',
        },
        {
            id: 55,
            title: 'fact',
            body: 'The world’s oldest wooden wheel has been around for more than 5,000 years',
        },
    ]);
    return (
        <ArchiveContext.Provider value={[archiveNotes, setArchiveNotes]}>
            {props.children}
        </ArchiveContext.Provider>
    );
};

/*  trash notes function */

const TrashContext = createContext([]);

export const TrashNoteProvider = (props) => {
    const [trashNotes, setTrashNotes] = useState([
        {
            id: 10,
            title: 'fact',
            body: 'The world’s oldest wooden wheel has been around for more than 5,000 years',
        },
    ]);
    return (
        <TrashContext.Provider value={[trashNotes, setTrashNotes]}>
            {props.children}
        </TrashContext.Provider>
    );
};

export { NotesContext, TrashContext, ArchiveContext };
