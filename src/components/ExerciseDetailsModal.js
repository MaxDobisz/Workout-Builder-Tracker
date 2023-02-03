import { useState } from 'react';
import { Box, Stack, Modal, Fade, Button, Typography, LinearProgress, Backdrop } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max-content',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ExerciseDetailsModal = ({ exercise }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <div>
            <Button onClick={handleOpen}>Details</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Stack alignItems='center'>
                            <img onLoad={() => setImageLoading(false)} src={exercise.gifUrl} alt={exercise.name} width='360' height='360' />
                            <Box sx={{ width: '360px', height: '1rem', mb: '1rem' }}>
                                {imageLoading && <LinearProgress />}
                            </Box>
                        </Stack>
                        <hr style={{ margin: 0 }} />
                        <Typography id="transition-modal-title" variant="h4" variantMapping={{ h4: 'h2' }} align='center'>
                            {exercise.name.toUpperCase()}
                        </Typography>
                        <hr style={{ margin: 0 }} />
                        <Typography id="transition-modal-description" variant="subtitle1" variantMapping={{ subtitle1: 'h3' }} sx={{ mt: 2 }}>
                            {`Body part: ${exercise.bodyPart}`}
                        </Typography>
                        <Typography id="transition-modal-description" variant="subtitle1" variantMapping={{ subtitle1: 'h3' }} sx={{ mt: 2 }}>
                            {`Target muscle: ${exercise.target}`}
                        </Typography>
                        <Typography id="transition-modal-description" variant="subtitle1" variantMapping={{ subtitle1: 'h3' }} sx={{ mt: 2 }}>
                            {`Equipment: ${exercise.equipment}`}
                        </Typography>
                    </Box>
                </Fade>
            </Modal >
        </div >
    );
}