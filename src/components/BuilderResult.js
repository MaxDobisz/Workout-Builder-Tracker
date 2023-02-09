import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { Stack, Typography, Divider, Box, Button } from "@mui/material";
import { useDaysContext } from "../context/daysContext";
import { NumberSelector } from './NumberSelector';
import { getDataFromLocalStorage } from '../utils/getDataFromLocalStorage';
import { capitalizeStringFirstLetter } from './../utils/capitalizeStringFirstLetter';

export const BuilderResult = () => {
    const navigate = useNavigate();
    const { daysContext } = useDaysContext();

    const filteredDaysContext = Object.fromEntries(
        Object.entries(daysContext).filter(([_, exercises]) => exercises.length > 0)
    );

    const createDaysOfTheWeekData = () => {
        for (const property in filteredDaysContext) {
            // console.log(filteredDaysContext[property])
            filteredDaysContext[property] = filteredDaysContext[property].map(exercise => {
                return (
                    { ...exercise, sets: 1, reps: 1 }
                )
            })
        }

        return filteredDaysContext;
    }

    const daysOfTheWeekData = createDaysOfTheWeekData();

    const handleButtonClick = () => {
        const newPlan = {
            creationDate: new Date().toLocaleDateString(),
            days: { ...daysOfTheWeekData },
            id: uuid()
        };

        const plans = getDataFromLocalStorage('plans', [])
        plans.push(newPlan);
        localStorage.setItem('plans', JSON.stringify(plans));
        navigate('/plans');
    }

    const weekPlan = Object.entries(filteredDaysContext).map(([day, exercises]) => {
        if (exercises.length > 0) {
            return (
                <Stack sx={{ bgcolor: 'white', border: '2px solid black', borderRadius: '5px', p: '1rem' }} key={uuid()}>
                    <Typography textAlign='center' fontWeight='600'>{`${day.toUpperCase()} (${exercises.length})`}</Typography>
                    <Divider sx={{ marginBottom: '1rem' }} />
                    <Stack gap={{ xs: '2rem', mds: '.5rem' }}>
                        {exercises.map(exercise => {
                            return (
                                <Stack direction={{ mds: 'row' }} alignItems='center' justifyContent='space-between' gap={{ mds: '2rem' }} key={uuid()}>
                                    <Typography /* textAlign={'left'} */>{capitalizeStringFirstLetter(exercise.name)}</Typography>
                                    <Stack direction='row' alignItems='center' gap='1rem'>
                                        sets:<NumberSelector onChange={(value) => {
                                            daysOfTheWeekData[day].map(item => {
                                                if (item.name === exercise.name) {
                                                    item.sets = value
                                                }
                                            });
                                        }} optionsNumber={4} />
                                        reps:<NumberSelector onChange={(value) => {
                                            daysOfTheWeekData[day].map(item => {
                                                if (item.name === exercise.name) {
                                                    item.reps = value
                                                }
                                            });
                                        }} optionsNumber={20} />
                                    </Stack>
                                </Stack>
                            )
                        })}
                    </Stack>
                </Stack >
            )
        }
        return null;
    })

    return (
        <Stack alignItems='center' p='0 1rem'>
            <Stack gap='1rem' maxHeight='75vh' sx={{ overflowY: 'auto' }} borderRadius='5px'>
            {weekPlan}
            </Stack>
            <Box mt='1rem'>
                <Button onClick={handleButtonClick} variant='contained' size="large">
                    Save
                </Button>
            </Box>
        </Stack>
    )
}