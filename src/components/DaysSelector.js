import { useState } from 'react';
import { Box, NativeSelect, InputLabel, FormControl } from '@mui/material';

export const DaysSelector = () => {
    const [day, setDay] = useState('');

    const handleChange = (event) => {
        setDay(event.target.value);
    };

    return (
        <Box minWidth={120} backgroundColor='white' fontWeight='700' border='2px solid black' >
            <FormControl fullWidth >
                <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ height: '1.5rem' }}>
                    Day of the week
                </InputLabel>
                <NativeSelect sx={{ height: '2.5rem', border: 'none' }}
                    defaultValue={30}
                    inputProps={{
                        name: 'day',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={1}>Monday</option>
                    <option value={2}>Tuesday</option>
                    <option value={3}>Wednesday</option>
                    <option value={4}>Thursday</option>
                    <option value={5}>Friday</option>
                    <option value={6}>Saturday</option>
                    <option value={7}>Sunday</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
