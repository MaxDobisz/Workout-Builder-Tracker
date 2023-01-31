import { Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavTab = styled(Tab)(({ theme }) => ({
    color: 'white',
    fontWeight: 700,
    fontSize: '2rem',
    backgroundColor: theme.palette.starCommandBlue,
    borderRadius: 50,
    margin: '2rem',
    padding: '.3em 1em',
}));
