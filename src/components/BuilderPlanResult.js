import { Stack, Typography, Divider } from "@mui/material";
import { useDaysContext } from "../context/daysContext";
import { NumberSelector } from './NumberSelector';
import uuid from 'react-uuid';

export const BuilderPlanResult = () => {
    const { daysContext } = useDaysContext();

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
        </Stack>
    )
}