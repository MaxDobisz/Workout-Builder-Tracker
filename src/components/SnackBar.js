import { Button, Snackbar, Slide, Alert } from '@mui/material';
import { useState } from 'react';
import { useDaysContext } from '../context/daysContext';

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}

export const DirectionSnackbar = ({ setShowResult }) => {
    const [open, setOpen] = useState(false);
    const [transition, setTransition] = useState(undefined);
    const { daysContext } = useDaysContext();

    const handleClick = Transition => () => {
        if (Object.values(daysContext).every(arr => arr.length === 0)) {
            setTransition(() => Transition);
            setOpen(true);
        } else {
            setShowResult(true)
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClick(TransitionDown)} variant='contained' sx={{ border: '2px solid silver', borderRadius: '10px' }}>NEXT</Button>
            <Snackbar autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                key={transition ? transition.name : ''}
            >
                <Alert severity="warning">Please asign at least one exercise to continue building your workout plan</Alert>
            </Snackbar>
        </div>
    );
}