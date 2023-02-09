/* eslint-disable react-hooks/exhaustive-deps */
import AccordionDetails from '@mui/material/AccordionDetails';
import { Stack } from '@mui/system';
import { NumberSelector } from './NumberSelector';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export const PlanAccordionDetails = ({ exercise }) => {
    const [setsCompleted, setSetsCompleted] = useState(0);
    const [repsCompleted, setRepsCompleted] = useState(0);

    useEffect(() => {
        if (setsCompleted === exercise.sets && repsCompleted === exercise.reps) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, [setsCompleted, repsCompleted]);

    return (
        <AccordionDetails>
            <Stack direction={{ sm: 'row' }} justifyContent='space-between' alignItems='center' gap='1rem'>
                {exercise.name.toUpperCase()}
                <Stack direction={'row'} gap='1.5rem' >
                    <Stack direction='row' alignItems='center' width='max-content'>
                        <Box mr='1rem'>
                            Sets:
                        </Box>
                        <NumberSelector onChange={(value) => { setSetsCompleted(value) }} optionsNumber={exercise.sets} defaultValue={0} />
                        {` / ${exercise.sets}`}
                    </Stack>
                    <Stack direction='row' alignItems='center' width='max-content'>
                        <Box mr='1rem'>
                            Reps:
                        </Box>
                        <NumberSelector onChange={(value) => { setRepsCompleted(value) }} optionsNumber={exercise.reps} defaultValue={0} />
                        {` / ${exercise.reps}`}
                    </Stack>
                </Stack>
            </Stack>
        </AccordionDetails>
    )
}