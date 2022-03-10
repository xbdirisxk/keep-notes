import React, { useState } from 'react';
import MainContent from '../styles/MainContent.styled';
import InputNoteField from './InputNoteField';
import GridNotes from './GridNotes';

const Main = ({ openModal, setOpen, themeType }) => {
    const [modal, setModal] = useState(null);

    return (
        <MainContent>
            <InputNoteField themeType={themeType} />
            <GridNotes
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
