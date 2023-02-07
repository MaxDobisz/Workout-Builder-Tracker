import { useState } from 'react';
import { Box, Stack, Modal, Fade, Button, Typography, LinearProgress, Backdrop } from '@mui/material';
import uuid from 'react-uuid';


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

export const WeekDetailsModal = ({ daysData }) => {
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
                    <Stack gap='1rem' sx={style}>
                        {Object.keys(daysData).map(day => {
                            return <Stack key={uuid()} >
                                <Typography sx={{ border: '2px solid blue', textAlign: 'center', fontWeight: 700 }}>{day}</Typography>
                                {daysData[day].map(exercise => {
                                    return <Stack direction='row' gap='1rem' sx={{ border: '2px solid red' }} key={uuid()}>
                                        <Typography fontWeight='700'>{exercise.name.toUpperCase()}</Typography>
                                        <Typography>Sets: {exercise.sets}</Typography>
                                        <Typography>Reps: {exercise.reps}</Typography>
                                    </Stack>
                                })}
                            </Stack>
                        })}
                    </Stack>
                </Fade>
            </Modal >
        </div >
    );
}