import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import { NotesContext } from '../../context/NotesProvider';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';

const NoteModal = ({ open, setOpen, modal, handleDelete, handleArchive }) => {
    const [title, settitle] = useState('');
    const [body, setBody] = useState('');

    const [themeType] = useContext(ThemeContext);
    const [notes, setNotes] = useContext(NotesContext);

    const handleClose = () => setOpen(false);

    const handleEdit = () => {
        // const editingNote

        setNotes([
            ...notes,
            //...editednote
            // editednote.title
            // editednote.body
        ]);
    };

    return (
        <>
            {modal && (
                <Modal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <BoxContainer themeType={themeType} bgColor={modal.color}>
                        <Box
                            sx={{ bgcolor: 'background.paper' }}
                            className='modal-box'
                        >
                            <div className='content'>
                                <Typography
                                    id='modal-modal-title'
                                    variant='h6'
                                    component='h2'
                                >
                                    {modal.title}
                                </Typography>
                                <Typography
                                    id='modal-modal-description'
                                    sx={{ mt: 2 }}
                                >
                                    {modal.body}
                                </Typography>
                            </div>
                            <div className='icons'>
                                <Tooltip>
                                    <BiBellPlus />
                                </Tooltip>
                                <Tooltip>
                                    <MdOutlineColorLens />
                                </Tooltip>
                                <Tooltip
                                    onClick={() => handleArchive(modal.id)}
                                >
                                    <BiArchiveOut />
                                    <span className='tooltiptext'>archive</span>
                                </Tooltip>

                                <Tooltip
                                    className='delete-icon'
                                    onClick={() => handleDelete(modal.id)}
                                >
                                    <IoTrashOutline />
                                    <span className='tooltiptext'>delete</span>
                                </Tooltip>
                                <Tooltip>
                                    <IoMdMore />
                                </Tooltip>
                            </div>
                        </Box>
                    </BoxContainer>
                </Modal>
            )}
        </>
    );
};

/* ============
    Modal styles
    ============ */
const BoxContainer = styled.div`
    .css-1k9ek97 {
        background-color: ${({ theme, themeType, bgColor }) =>
            themeType !== 'dark'
                ? bgColor
                : bgColor !== '#fff'
                ? bgColor
                : theme.dark.background} !important;

        color: ${({ themeType, bgColor }) =>
            themeType !== 'dark'
                ? '#000'
                : bgColor !== '#fff'
                ? '#000'
                : '#fff'} !important;

        border: 2px solid #fff !important;
    }
    .modal-box {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 20px;
        padding-bottom: 5px;
        border: 1px;
        border-radius: 10px;
        transform: translate(-50%, -50%);
        min-width: 30vw;
        max-width: 50vw;
        max-height: 85vh;
    }

    .modal-box > .content {
        overflow: auto;
    }

    #modal-modal-title {
        font-weight: bold;
    }
    .modal-box > .icons {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        font-size: 1.2rem;
        margin-right: 5px;
    }
    .modal-box > .icons > * {
        margin-left: 10px;
        padding: 2px;
        border-radius: 30px;
        padding: 6px 6px 1px;
        transition: 0.2s;
    }
    .modal-box > .icons > *:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.icons.hover.backgroundColor
                : theme.light.noteBox.icons.hover.backgroundColor};
        cursor: pointer;
    }
    .modal-box > .icons > .delete-icon:hover {
        background-color: ${({ theme, themeType }) =>
            themeType === 'dark'
                ? theme.dark.icons.hover.deleteIconColor
                : 'hsl(1, 95%, 88%)'};
    }

    @media (max-width: 750px) {
        .modal-box {
            min-width: 86vw;
        }
    }
`;

/* ============
    Tooltip styles
    ============ */

const Tooltip = styled.span`
    position: relative;
    display: inline-block;

    .tooltiptext {
        visibility: hidden;
        font-size: 0.9rem;
        background-color: #000;
        color: #fff;
        text-align: center;
        padding: 3px 0;
        border-radius: 6px;
        width: 60px;
        opacity: 0.6;
        transition-delay: 0.25s;

        /* Position the tooltip text */
        position: absolute;
        top: 100%;
        left: 50%;
        margin-top: 10px;
        margin-left: -30px;
        z-index: 10;
    }

    &:hover .tooltiptext {
        visibility: visible;
    }
`;

export default NoteModal;
