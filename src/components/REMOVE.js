import { Tab, styled } from '@mui/material';

export const NavTab = styled(Tab)(({ theme }) => ({
    color: 'white',
    fontWeight: 700,
    fontSize: '2rem',
    backgroundColor: theme.palette.starCommandBlue,
    borderRadius: 50,
    margin: '2rem',
    padding: '.3em 1em',
}));
