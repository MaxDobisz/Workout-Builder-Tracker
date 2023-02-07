import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { Stack, Typography, Divider, Box, Button } from "@mui/material";
import { useDaysContext } from "../context/daysContext";
import { NumberSelector } from './NumberSelector';
import { getDataFromLocalStorage } from '../utils/getDataFromLocalStorage';

export const BuilderResult = () => {
    const navigate = useNavigate();
    const { daysContext } = useDaysContext();

    // remove empty days
    const filteredDaysContext = Object.fromEntries(
        Object.entries(daysContext).filter(([_, exercises]) => exercises.length > 0)
    );

    // add sets and reps properties to each exercise object
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
        //create a newPlan object with creation date
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
            return <Stack sx={{ bgcolor: 'blue' }} key={uuid()}> {/* day wrapper */}
                <Typography textAlign='center'>{`${day.toUpperCase()}(${exercises.length})`}</Typography>
                <Divider />
                {exercises.map(exercise => {
                    return (
                        <Stack direction='row' alignItems='center' justifyContent='space-between' gap='1rem' key={uuid()}> {/* exercise wrapper */}
                            <Typography>{exercise.name.toUpperCase()}:</Typography>
                            <Stack direction='row' alignItems='center' gap='1rem'>
                                sets<NumberSelector onChange={(value) => {
                                    daysOfTheWeekData[day].map(item => {
                                        if (item.name === exercise.name) {
                                            item.sets = value
                                        }

                                    });
                                }} optionsNumber={4} />
                                reps<NumberSelector onChange={(value) => {
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
        }
        return null;
    })

    return (
        <Stack gap='1rem'> {/*week wrapper */}
            {weekPlan}
            <Box>
                <Button onClick={handleButtonClick} variant='contained' size="large">
                    Save
                </Button>
            </Box>
        </Stack>
    )
}