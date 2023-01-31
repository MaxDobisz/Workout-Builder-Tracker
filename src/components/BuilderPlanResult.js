import { Container, Box, Typography, Stack } from "@mui/material";
import { NumberSelector } from './NumberSelector';


export const BuilderPlanResult = () => {
    return (
        <Container maxWidth='lg' sx={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center', gap: '1rem' }} >
            <Stack direction={'column'} sx={{ backgroundColor: 'white' }}>
                <Typography> DAY 1</Typography>
                <Stack direction={'column'} spacing={4}> {/* LIST OF EXERCISES */}
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
            <Stack direction={'column'} sx={{ backgroundColor: 'white' }}>
                <Typography> DAY 1</Typography>
                <Stack direction={'column'} spacing={4}> {/* LIST OF EXERCISES */}
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
            <Stack direction={'column'} sx={{ backgroundColor: 'white' }}>
                <Typography> DAY 1</Typography>
                <Stack direction={'column'} spacing={4}> {/* LIST OF EXERCISES */}
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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
                    <Stack direction={'column'} sx={{ border: '2px solid red' }}> {/* Exercise Container */}
                        <Typography> Push ups</Typography>
                        <Stack direction={'row'} sx={{ alignItems: 'center' }} >{/* Sets Container */}
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








            {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Box sx={{ backgroundColor: 'white' }}>

                    <Box >


                    </Box>
                    <Typography>Exercice 1</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <NumberSelector />
                    </Box>

                </Box>
            </Box> */}













        </Container>
    )
}


