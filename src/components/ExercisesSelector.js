import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export const ExercisesSelector = ({ setSelectedTypeOfExercises }) => {
    const setOfExercisesTypes = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
    const [typesOfExercises, setTypesOfExercises] = useState('');

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