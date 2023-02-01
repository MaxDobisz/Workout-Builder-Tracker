import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { NativeSelect } from '@mui/material';

export const NumberSelector = () => {
    const [day, setDay] = useState('');

    const handleChange = (event) => {
        setDay(event.target.value);
    };

    return (
        <Box backgroundColor='white' border='2px solid black'>
            <FormControl fullWidth>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'day',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
