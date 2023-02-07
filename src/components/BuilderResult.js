import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { Stack, Typography, Divider, Box, Button } from "@mui/material";
import { useDaysContext } from "../context/daysContext";
import { NumberSelector } from './NumberSelector';
import { getDataFromLocalStorage } from '../utils/getDataFromLocalStorage';

export const BuilderResult = () => {
    const { daysContext } = useDaysContext();
    const navigate = useNavigate();

    const handleButtonClick = () => {
        const plans = getDataFromLocalStorage('plans', [])
        const newPlan = {
            creationDate: new Date().toLocaleDateString(),
            days: { ...daysContext }
        };
        plans.push(newPlan);
        localStorage.setItem('plans', JSON.stringify(plans));
        navigate('/plans');
    }






    return (
        <Stack gap='1rem'> {/* whole week wrapper */}
            {Object.entries(daysContext).map(([day, exercises]) => {
                if (exercises.length > 0) {
                    return <Stack sx={{ bgcolor: 'blue' }} key={uuid()}> {/* day wrapper */}
                        <Typography textAlign='center'>{`${day.toUpperCase()}(${exercises.length})`}</Typography>
                        <Divider />
                        {exercises.map(exercise => {
                            return (
                                <Stack direction='row' alignItems='center' justifyContent='space-between' gap='1rem' key={uuid()}> {/* exercise wrapper */}
                                    <Typography>{exercise.name.toUpperCase()}:</Typography>
                                    <Stack direction='row' alignItems='center' gap='1rem'>
                                        sets<NumberSelector />
                                        reps<NumberSelector />
                                    </Stack>
                                </Stack>
                            )

                        })}
                    </Stack>
                }
                return null;
            })}
            <Box>
                <Button onClick={handleButtonClick} variant='contained' size="large">
                    Save
                </Button>
            </Box>
        </Stack>
    )
}