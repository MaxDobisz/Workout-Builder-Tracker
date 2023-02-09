import { Box, FormControl, NativeSelect } from '@mui/material';

export const NumberSelector = ({ onChange, optionsNumber, defaultValue = 1 }) => {
    const renderOptions = () => {
        let options = [];

        for (let i = defaultValue; i <= optionsNumber; i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }

        return options;
    }

    const handleChange = (event) => {
        onChange(Number(event.target.value));
    };


    return (
        <Box backgroundColor='white' >
            <FormControl fullWidth onChange={handleChange}>
                <NativeSelect 
                    defaultValue={defaultValue}
                    inputProps={{
                        name: 'day',
                        id: 'uncontrolled-native',
                    }}
                >
                    {renderOptions()}
                </NativeSelect>
            </FormControl>
        </Box>
    );
}
