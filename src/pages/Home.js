import { Container, Box } from '@mui/material';

export const Home = () => {
    return (
        <Container maxWidth="lg" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Box sx={{ fontSize: { xs: '4rem', md: '6rem' }, lineHeight: '100%', mb: '1rem', textShadow: '3px 0px 5px rgba(178,142,94,0.6), -3px 0px 5px rgba(0,0,0,0.8), 0px 4px 5px rgba(0,0,0,0.9)' }} color={'white'} fontWeight='700' textAlign='center'>
                Workout tracker
            </Box>
            <Box sx={{ fontSize: { xs: '1.3rem', md: '2rem' }, textShadow: '3px 0px 5px rgba(178,142,94,0.6), -3px 0px 5px rgba(0,0,0,0.8), 0px 4px 5px rgba(0,0,0,0.9)' }} color='white' fontStyle='italic' textAlign='center' margin='0 auto'>
                "The pain you feel today is the strength you feel tomorrow."
            </Box>
        </Container >
    )
}