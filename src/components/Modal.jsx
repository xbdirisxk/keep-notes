import React from 'react';
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
                            <Tooltip onClick={() => handleArchive(modal.id)}>
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
                </Modal>
            )}
        </>
    );
};

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
