import { useContext, useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { ExercisesContext } from '../context/context';

export const ExercisesSelector = () => {
    const setOfExercisesTypes = ['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist']
    const [typesOfExercises, setTypesOfExercises] = useState('');
    const { setSelectedTypeOfExercises } = useContext(ExercisesContext);

    const handleChange = event => {
        setTypesOfExercises(event.target.value);
        setSelectedTypeOfExercises(event.target.value);
    };

    return (
        <FormControl variant='filled' sx={{ backgroundColor: 'white', width: '320px', borderRadius: '5px', border: '2px solid black' }}>
            <InputLabel sx={{ fontWeight: '700', color: 'black' }} id="demo-simple-select-label">Select type of exercises</InputLabel>
            <Select sx={{ fontSize: '1.3rem', fontWeight: '600' }} labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typesOfExercises}
                    label="Select type of exercises"
                    onChange={handleChange}
                >
                {setOfExercisesTypes.map(type => <MenuItem value={type} key={type} sx={{ fontWeight: '500' }}>{type}</MenuItem>)}
                </Select>
        </FormControl>
    );
}