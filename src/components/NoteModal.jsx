import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

const NoteModal = ({ open, setOpen, modal }) => {
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
                    </Box>
                </Modal>
            )}
        </>
    );
};

export default NoteModal;
