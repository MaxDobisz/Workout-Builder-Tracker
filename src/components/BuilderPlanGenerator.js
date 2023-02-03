import { useEffect, useState } from 'react';
import axios from "axios";
import { Container, Stack, Box } from "@mui/material";
import { ExercisesSelector } from "./ExercisesSelector";
import { EquipmentSwitch } from "./EquipmentSwitch";
import { ExercisesTransfer } from "./ExercisesTransfer";
import { ExercisesContext } from '../context/context';

export const BuilderPlanGenerator = () => {
    const [selectedTypeOfExercises, setSelectedTypeOfExercises] = useState('');
    const [listOfExercises, setListOfExercises] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedTypeOfExercises}`,
            headers: {
                'X-RapidAPI-Key': '123a2689d3msh20cb5bf8568be58p19439fjsn359b1af4dcc8',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            }
        };

        const fetchData = async () => {
            try {
                const { data } = await axios.request(options); /*data =  is array with exercises objects */
                if (data && data.length > 0) {
                    console.log('fetch success')
                    setListOfExercises(data);
                }
            } catch (error) {
                console.log('error')
            }
        }

        if (selectedTypeOfExercises) {
            console.log('Im calling API');
            fetchData()
        }

    }, [selectedTypeOfExercises]);

    return (
        <ExercisesContext.Provider value={{ listOfExercises, setSelectedTypeOfExercises }}>
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
        </ExercisesContext.Provider>
    )
}