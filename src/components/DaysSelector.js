import { Box, NativeSelect, InputLabel, FormControl } from '@mui/material';

export const DaysSelector = ({ day, setDay }) => {

    const handleChange = (event) => {
        setDay(event.target.value);
    };

    return (
        <Box minWidth={120} backgroundColor='white' fontWeight='700' border='2px solid black' p='.5rem' borderRadius='5px 5px 0 0'  >
            <FormControl fullWidth onChange={handleChange}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" >
                    Day of the week
                </InputLabel>
                <NativeSelect sx={{ fontWeight: '700' }}
                    // defaultValue={30}
                    inputProps={{
                        name: 'day',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={'monday'} style={{ textAlign: 'center' }}>Monday</option>
                    <option value={'tuesday'} style={{ textAlign: 'center' }}>Tuesday</option>
                    <option value={'wednesday'} style={{ textAlign: 'center' }}>Wednesday</option>
                    <option value={'thursday'} style={{ textAlign: 'center' }}>Thursday</option>
                    <option value={'friday'} style={{ textAlign: 'center' }}>Friday</option>
                    <option value={'saturday'} style={{ textAlign: 'center' }}>Saturday</option>
                    <option value={'sunday'} style={{ textAlign: 'center' }}>Sunday</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
