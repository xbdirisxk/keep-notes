import React, { useState, createContext } from 'react';

const NotesContext = createContext([]);

const NotesProvider = (props) => {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'fact',
            body: 'The world’s oldest wooden wheel has been around for more than 5,000 years',
            color: '#fff475',
        },
        {
            id: 2,
            title: 'loremII',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus ratione velit! Doloribus nostrum, atque omnis laboriosam natus in aliquid cupiditate iste facilis soluta cum voluptatum accusantium id vitae accusamus, expedita quod veniam tempore delectus libero ducimus accusamus laboriosam error.',
            color: '#a7ffeb',
        },

        {
            id: 3,
            title: 'fun fact',
            body: 'Steve Jobs, Steve Wozniak, and Ron Wayne started Apple Inc. on April Fools’ Day',
            color: '#fff',
        },
        {
            id: 4,
            title: 'loremIV',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus ratione velit! Doloribus nostrum, atque omnis laboriosam natus in aliquid cupiditate iste facilis soluta cum voluptatum accusantium id vitae accusamus, minus a consectetur nemo.',
            color: '#fdcfe8',
        },

        {
            id: 5,
            title: 'loremV',
            body: 'minus a consectetur nemo. Atque animi voluptatum voluptatem.',
            color: '#fff',
        },
        {
            id: 6,
            title: 'loremII',
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus ratione velit! Doloribus nostrum, atque omnis laboriosam natus in aliquid cupiditate iste facilis soluta cum voluptatum accusantium id vitae accusamus.',
            color: '#e8eaed',
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
    const [archiveNotes, setArchiveNotes] = useState([]);
    return (
        <ArchiveContext.Provider value={[archiveNotes, setArchiveNotes]}>
            {props.children}
        </ArchiveContext.Provider>
    );
};

/*  trash notes function */

const TrashContext = createContext([]);

export const TrashNoteProvider = (props) => {
    const [trashNotes, setTrashNotes] = useState([]);
    return (
        <TrashContext.Provider value={[trashNotes, setTrashNotes]}>
            {props.children}
        </TrashContext.Provider>
    );
};

export { NotesContext, TrashContext, ArchiveContext };
export default NotesProvider;
