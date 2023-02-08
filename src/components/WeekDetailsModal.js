import { useState } from 'react';
import { Stack, Modal, Fade, Button, Typography, Backdrop, Divider } from '@mui/material';
import uuid from 'react-uuid';
import { capitalizeStringFirstLetter } from '../utils/capitalizeStringFirstLetter';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '75vh',
    minWidth: '310px',
    overflowY: 'auto'
};

export const WeekDetailsModal = ({ daysData }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <Stack gap='2rem' sx={style}>
                        {Object.keys(daysData).map(day => {
                            return (
                                <Stack key={uuid()} gap='1rem'>
                                    <Typography sx={{ textAlign: 'center', fontWeight: 700 }}>{day.toUpperCase()}</Typography>
                                    <Divider />
                                    {daysData[day].map(exercise => {
                                        return (
                                            <Stack direction={{ mds: 'row' }} gap={{ mds: '1rem' }} key={uuid()} justifyContent='space-between'>
                                                <Typography fontWeight='500'>{capitalizeStringFirstLetter(exercise.name)}</Typography>
                                                <Stack direction='row' gap='1rem' alignItems={'center'}>
                                                    <Typography whiteSpace={'noWrap'}>Sets: {exercise.sets}</Typography>
                                                    <Typography whiteSpace={'noWrap'}>Reps: {exercise.reps}</Typography>
                                                </Stack>
                                            </Stack>
                                        )
                                    })}
                                </Stack>
                            )
                        })}
                    </Stack>
                </Fade>
            </Modal >
        </div >
    );
}