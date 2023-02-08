import { Stack, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/builder');
    }

    return (
        <Stack alignItems='center' gap='1rem' sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', p: '0 1rem' }}>
            <Box sx={{ fontSize: { xs: '4rem', md: '6rem' }, lineHeight: '100%', textShadow: '3px 0px 5px rgba(178,142,94,0.6), -3px 0px 5px rgba(0,0,0,0.8), 0px 4px 5px rgba(0,0,0,0.9)' }} color={'white'} fontWeight='700' textAlign='center'>
                Workout tracker
            </Box>
            <Box sx={{ fontSize: { xs: '1.3rem', md: '2rem' }, textShadow: '3px 0px 5px rgba(178,142,94,0.6), -3px 0px 5px rgba(0,0,0,0.8), 0px 4px 5px rgba(0,0,0,0.9)' }} color='white' fontStyle='italic' textAlign='center'>
                "The pain you feel today is the strength you feel tomorrow."
            </Box>
            <Button onClick={handleButtonClick} variant='contained' sx={{ width: 'max-content', color: 'white', fontWeight: '700', bgcolor: 'rgb(50,60,62,0.9)', border: '2px solid silver', letterSpacing: '2px', borderRadius: '25px' }}>START</Button>
        </Stack >
    )
}