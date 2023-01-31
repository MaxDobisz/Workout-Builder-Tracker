import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

export const Home = () => {
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Container sx={{ height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ color: 'white', fontSize: 'h1.fontSize', fontWeight: '700', textAlign: 'center' }}>Workout tracker</Box>
            <Box sx={{ width: '50%', color: 'white', fontSize: 'h4.fontSize', fontStyle: 'italic', textAlign: 'center' }}>"The pain you feel today is the strength you feel tomorrow."</Box>
        </Container >
    )
}