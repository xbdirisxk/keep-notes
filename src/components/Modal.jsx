import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { MdOutlineColorLens } from 'react-icons/md';
import { BiBellPlus, BiArchiveOut } from 'react-icons/bi';
import { IoMdMore } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';

const NoteModal = ({ open, setOpen, modal, handleDelete }) => {
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
                        <Typography
                            id='modal-modal-title'
                            variant='h6'
                            component='h2'
                        >
                            {modal.title}
                        </Typography>
                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                            {modal.body}
                        </Typography>
                        <div className='icons'>
                            <span>
                                <BiArchiveOut />
                            </span>
                            <span>
                                <MdOutlineColorLens />
                            </span>
                            <span>
                                <BiBellPlus />
                            </span>
                            <span onClick={() => handleDelete(modal.id)}>
                                <IoTrashOutline />
                            </span>
                            <span>
                                <IoMdMore />
                            </span>
                        </div>
                    </Box>
                </Modal>
            )}
        </>
    );
};

export default NoteModal;
