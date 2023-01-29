import { useState } from 'react';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
    Link as RouterLink,
} from 'react-router-dom';

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link component={RouterLink} to="/" underline="none">
                                    Home
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link component={RouterLink} to="/builder" underline="none">
                                    Plan builder
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link component={RouterLink} to="/plans" underline="none">
                                    My plans
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link component={RouterLink} to="/tracker" underline="none">
                                    Plan tracker
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link component={RouterLink} to="/news" underline="none">
                                    News
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', }}>
                        <Link component={RouterLink} to="/" underline="none">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                            </Button>
                        </Link>
                        <Link component={RouterLink} to="/builder" underline="none">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Plan builder
                            </Button>
                        </Link>
                        <Link component={RouterLink} to="/plans" underline="none">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Your plans
                            </Button>
                        </Link>
                        <Link component={RouterLink} to="/tracker" underline="none">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                Plans tracker
                            </Button>
                        </Link>
                        <Link component={RouterLink} to="/news" underline="none">
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                News
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}



