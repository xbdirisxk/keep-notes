import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const NoteModal = ({ open, setOpen, modal }) => {
    const handleClose = () => setOpen(false);

    return (
        <>
            {modal && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
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
                    </Box>
                </Modal>
            )}
        </>
    );
};

export default NoteModal;
