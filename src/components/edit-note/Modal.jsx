import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../App';
import { NotesContext } from '../../context/NotesProvider';
import BoxContainer from './Modal.styled';
import { Tooltip } from './Modal.styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';

const NoteModal = ({ open, setOpen, modal, handleDelete, handleArchive }) => {
    const [themeType] = useContext(ThemeContext);

    const handleClose = () => setOpen(false);

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

export default NoteModal;
