import { Container, Box } from '@mui/material';

// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

export const Home = () => {
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Box color='white' fontSize='h1.fontSize' fontWeight='700' textAlign='center'>
                Workout tracker
            </Box>
            <Box width='50%' color='white' fontSize='h4.fontSize' fontStyle='italic' textAlign='center' margin='0 auto'>
                "The pain you feel today is the strength you feel tomorrow."
            </Box>
        </Container >
    )
}