import { useEffect, useState } from 'react';
import axios from "axios";
import { Container, Stack, Box } from "@mui/material";
import { ExercisesSelector } from "./ExercisesSelector";
import { EquipmentSwitch } from "./EquipmentSwitch";
import { ExercisesTransfer } from "./ExercisesTransfer";
import { ExercisesContext } from '../context/context';
import { DirectionSnackbar } from './SnackBar';

export const BuilderGenerator = ({ setShowResult }) => {
    const [selectedTypeOfExercises, setSelectedTypeOfExercises] = useState('');
    const [listOfExercises, setListOfExercises] = useState([]);
    const [includeEquipment, setIncludeEquipment] = useState(true);
    const [linearProgress, setLinearProgress] = useState(false)

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedTypeOfExercises}`,
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_EXERCISES_DB_KEY}`,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            }
        };

        const fetchData = async () => {
            setLinearProgress(true)
            try {
                const { data } = await axios.request(options); /*data =  is array with exercises objects */
                if (data && data.length > 0) {
                    setListOfExercises(data);
                    setLinearProgress(false)
                }
            } catch (error) {
                setLinearProgress(false)
                //and show errror
            }
        }

        if (selectedTypeOfExercises) {
            fetchData()
        }

    }, [selectedTypeOfExercises]);

    return (
        <ExercisesContext.Provider value={{ listOfExercises, setSelectedTypeOfExercises, includeEquipment, setIncludeEquipment, linearProgress }}>
            <Container maxWidth='lg' sx={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
                <Stack spacing={3}>
                    <Box display='flex' flexWrap='wrap' alignItems='center' justifyContent='center' gap='1rem'>
                        <ExercisesSelector />
                        <EquipmentSwitch />
                    </Box>
                    <Box display='flex' alignItems='center' gap='1rem' justifyContent='center'>
                        <ExercisesTransfer />
                    </Box>
                </Stack>
            </Container>
            <Box m='2rem'>
                <DirectionSnackbar setShowResult={setShowResult} />
            </Box>
        </ExercisesContext.Provider>
    )
}