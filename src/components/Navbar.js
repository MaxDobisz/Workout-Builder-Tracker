import { Link as RouterLink, } from 'react-router-dom';
import { useState } from 'react';
import { Link, AppBar, Box, Toolbar, IconButton, Menu, MenuItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarButton } from './NavbarButton';

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static' color='transparent' sx={{ height: '10%', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box flexGrow={1} display={{ xs: 'flex', md: 'none' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx={{ color: 'white', fontSize: '3rem', mt: '2rem' }} />
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
                    <Box display={{ xs: 'none', md: 'flex' }} flexGrow={1} justifyContent='center' background='none'>
                        <Link component={RouterLink} to="/" underline="none">
                            <NavbarButton sx={{ my: 2, color: 'white', display: 'block' }}>
                                Home
                            </NavbarButton>
                        </Link>
                        <Link component={RouterLink} to="/builder" underline="none">
                            <NavbarButton sx={{ my: 2, color: 'white', display: 'block' }}>
                                Builder
                            </NavbarButton>
                        </Link>
                        <Link component={RouterLink} to="/plans" underline="none">
                            <NavbarButton sx={{ my: 2, color: 'white', display: 'block' }}>
                                Plans
                            </NavbarButton>
                        </Link>
                        <Link component={RouterLink} to="/tracker" underline="none">
                            <NavbarButton sx={{ my: 2, color: 'white', display: 'block' }}>
                                Tracker
                            </NavbarButton>
                        </Link>
                        <Link component={RouterLink} to="/news" underline="none">
                            <NavbarButton sx={{ my: 2, color: 'white', display: 'block' }}>
                                News
                            </NavbarButton>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}