import { useContext, useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { ExercisesContext } from '../context/context';


export const ExercisesSelector = () => {
    const setOfExercisesTypes = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
    const [typesOfExercises, setTypesOfExercises] = useState('');
    const { setSelectedTypeOfExercises } = useContext(ExercisesContext);

    const handleChange = (event) => {
        setTypesOfExercises(event.target.value);
        setSelectedTypeOfExercises(event.target.value);
    };

    return (
        <Box minWidth={280} backgroundColor='white'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Select type of exercises</InputLabel>
                <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typesOfExercises}
                    label="Select type of exercises"
                    onChange={handleChange}
                >
                    {setOfExercisesTypes.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}