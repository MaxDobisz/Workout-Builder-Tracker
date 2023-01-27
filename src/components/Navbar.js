import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { NavTab } from './NavTab';

export const Navbar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'transparent', fontSize: 40 }}>
            <Tabs value={value} onChange={handleChange} centered textColor='inherit' indicatorColor='false'>
                <NavTab label="HOME" />
                <NavTab label="HOME" />
                <NavTab label="PLAN BUILDER" />
                <NavTab label="FITNEWS" />
            </Tabs>
        </Box>
    );
}