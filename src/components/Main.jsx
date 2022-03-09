import React, { useState } from 'react';
import MainContent from './styles/MainContent.styled';
import InputNoteField from './InputNoteField';
import GridNotes from './GridNotes';

const Main = ({ openModal, setOpen, themeType }) => {
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
    const [modal, setModal] = useState(null);

    return (
        <MainContent>
            <InputNoteField
                notes={notes}
                setNotes={setNotes}
                themeType={themeType}
            />
            <GridNotes
                notes={notes}
                setNotes={setNotes}
                openModal={openModal}
                setOpen={setOpen}
                modal={modal}
                setModal={setModal}
                themeType={themeType}
            />
        </MainContent>
    );
};

export default Main;
