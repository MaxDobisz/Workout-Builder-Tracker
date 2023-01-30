import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavbarButton = styled(Button)(({ theme }) => ({
    fontSize: '1.2rem',
    backgroundColor: theme.palette.richBlack1,
    margin: '0 1rem',
    padding: '.2em 1em',
    border: `2px solid ${theme.palette.silver}`,
    borderRadius: '10px',
    '&:hover': {
        backgroundColor: theme.palette.darkBlue,
    },
}));