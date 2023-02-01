import { Container, Typography, Stack } from "@mui/material";
import { NumberSelector } from './NumberSelector';

export const BuilderPlanResult = () => {
    return (
        <Container sx={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center', gap: '1rem' }} >
            <Stack direction='column' backgroundColor='white'> {/* Day container*/}
                <Typography> DAY 1</Typography>
                <Stack direction='column' spacing={4}> {/* LIST OF EXERCISES */}
                    <Stack direction='column' border='2px solid red'> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction='row' alignItems='center' >{/* Sets Container */}
                            <Typography> Sets</Typography>
                            <NumberSelector />
                        </Stack>
                        <Stack direction='row' alignItems='center'>{/* Reps Container */}
                            <Typography>Reps</Typography>
                            <NumberSelector />
                            <NumberSelector />
                            <NumberSelector />
                        </Stack>
                    </Stack>
                    <Stack direction='column' border='2px solid red'> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction='row' alignItems='center'> {/* Sets Container */}
                            <Typography> Sets</Typography>
                            <NumberSelector />
                        </Stack>
                        <Stack direction='row' alignItems='center'> {/* Reps Container */}
                            <Typography>Reps</Typography>
                            <NumberSelector />
                            <NumberSelector />
                            <NumberSelector />
                        </Stack>
                    </Stack>
                    <Stack direction='column' sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction='row' sx={{ alignItems: 'center' }} >{/* Sets Container */}
                            <Typography> Sets</Typography>
                            <NumberSelector />
                        </Stack>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }}>{/* Reps Container */}
                            <Typography>Reps</Typography>
                            <NumberSelector />
                            <NumberSelector />
                            <NumberSelector />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}


