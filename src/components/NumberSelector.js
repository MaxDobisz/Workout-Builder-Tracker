import { Box, FormControl, NativeSelect } from '@mui/material';

export const NumberSelector = ({ onChange, optionsNumber }) => {
    const renderOptions = () => {
        let options = [];

        for (let i = 1; i <= optionsNumber; i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }

        return options;
    }

    const handleChange = (event) => {
        onChange(Number(event.target.value));
    };


    return (
        <Box backgroundColor='white' border='2px solid black'>
            <FormControl fullWidth onChange={handleChange}>
                <NativeSelect
                    defaultValue={1}
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
