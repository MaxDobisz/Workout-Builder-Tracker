import { useEffect, useState } from 'react';
import axios from "axios";
import { Container, Stack, Box, Button, Snackbar, Slide } from "@mui/material";
import { ExercisesSelector } from "./ExercisesSelector";
import { EquipmentSwitch } from "./EquipmentSwitch";
import { ExercisesTransfer } from "./ExercisesTransfer";
import { ExercisesContext } from '../context/context';
import { useDaysContext } from "../context/daysContext";
import { DirectionSnackbar } from './SnackBar';


export const BuilderGenerator = ({ setShowResult }) => {

    const [selectedTypeOfExercises, setSelectedTypeOfExercises] = useState('');
    const [listOfExercises, setListOfExercises] = useState([]);
    const [includeEquipment, setIncludeEquipment] = useState(true);

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
            try {
                const { data } = await axios.request(options); /*data =  is array with exercises objects */
                if (data && data.length > 0) {
                    setListOfExercises(data);
                }
            } catch (error) {
            }
        }

        if (selectedTypeOfExercises) {
            fetchData()
        }

    }, [selectedTypeOfExercises]);

    return (
        <ExercisesContext.Provider value={{ listOfExercises, setSelectedTypeOfExercises, includeEquipment, setIncludeEquipment }}>
            <Container maxWidth='lg' sx={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
                <Stack spacing={3}>
                    <Box display='flex' alignItems='center' justifyContent='center' gap='1rem'>{/*  wrapper for inputs ( exercises selector / equipment swich) */}
                        <ExercisesSelector />
                        <EquipmentSwitch />
                    </Box>
                    <Box display='flex' alignItems='center' gap='1rem'> {/* wrapper for transferList */}
                        <ExercisesTransfer />
                    </Box>
                </Stack>
            </Container>
            <Box>
                <DirectionSnackbar setShowResult={setShowResult} />
            </Box>
        </ExercisesContext.Provider>
    )
}