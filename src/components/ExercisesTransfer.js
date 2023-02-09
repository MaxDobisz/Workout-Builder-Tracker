import { useContext, useEffect, useState } from 'react';
import { Box, Grid, Button, Stack, createTheme } from '@mui/material';
import { DaysSelector } from './DaysSelector';
import { ExerciseListItem } from './ExerciseListItem';
import { ExercisesContext } from '../context/context';
import { useDaysContext } from '../context/daysContext';

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

export const ExercisesTransfer = () => {
    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState([]);
    const [day, setDay] = useState('monday');
    const { daysContext, setDaysContext } = useDaysContext();
    const { listOfExercises } = useContext(ExercisesContext);
    const leftChecked = intersection(checked, left);

    useEffect(() => {
        if (listOfExercises && listOfExercises.length > 0) {
            setLeft(listOfExercises)
        }

    }, [listOfExercises])

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleCheckedRight = () => {
        switch (day) {
            case 'monday':
                setDaysContext.setMonday(daysContext.monday.concat(leftChecked));
                break;
            case 'tuesday':
                setDaysContext.setTuesday(daysContext.tuesday.concat(leftChecked));
                break;
            case 'wednesday':
                setDaysContext.setWednesday(daysContext.wednesday.concat(leftChecked));
                break;
            case 'thursday':
                setDaysContext.setThursday(daysContext.thursday.concat(leftChecked));
                break;
            case 'friday':
                setDaysContext.setFriday(daysContext.friday.concat(leftChecked));
                break;
            case 'saturday':
                setDaysContext.setSaturday(daysContext.saturday.concat(leftChecked));
                break;
            case 'sunday':
                setDaysContext.setSunday(daysContext.sunday.concat(leftChecked));
                break;
            default:
                console.log('zjebalo sie');
        }

        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleRemoveListItem = (value) => {
        switch (day) {
            case 'monday':
                setDaysContext.setMonday(daysContext.monday.filter(item => item !== value));
                break;
            case 'tuesday':
                setDaysContext.setTuesday(daysContext.tuesday.filter(item => item !== value));
                break;
            case 'wednesday':
                setDaysContext.setWednesday(daysContext.wednesday.filter(item => item !== value));
                break;
            case 'thursday':
                setDaysContext.setThursday(daysContext.thursday.filter(item => item !== value));
                break;
            case 'friday':
                setDaysContext.setFriday(daysContext.friday.filter(item => item !== value));
                break;
            case 'saturday':
                setDaysContext.setSaturday(daysContext.saturday.filter(item => item !== value));
                break;
            case 'sunday':
                setDaysContext.setSunday(daysContext.sunday.filter(item => item !== value));
                break;
            default:
                console.log('error');
        }
    }

    const customList = (items, right) => (
        <Stack sx={{ width: { xs: '320px', sm: '450px' }, height: 250, overflow: 'auto', bgcolor: 'white', border: '2px solid black', borderTop: 'none', alignItems: 'center', position: 'relative', borderRadius: '0 0 5px 5px' }}>
            {items && items.length === 0 ? <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}> no exercises </Box> : <ExerciseListItem items={items} checkedItems={checked} handleToggle={handleToggle} handleRemoveListItem={handleRemoveListItem} right={right} />
            }
        </Stack >
    );

    const showSelectedList = (day) => {
        switch (day) {
            case 'monday':
                return customList(daysContext.monday, true);

            case 'tuesday':
                return customList(daysContext.tuesday, true);
            case 'wednesday':
                return customList(daysContext.wednesday, true);
            case 'thursday':
                return customList(daysContext.thursday, true);
            case 'friday':
                return customList(daysContext.friday, true);
            case 'saturday':
                return customList(daysContext.saturday, true);
            case 'sunday':
                return customList(daysContext.sunday, true);
            default:
                console.log('error');
        }
    }

    return (
        <Stack alignItems='center' direction={{ mdl: 'row' }}>
            <Box  >{/* list 1 */}
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ height: '68px', backgroundColor: 'white', textAlign: 'center', fontWeight: '700', border: '2px solid black', borderRadius: '5px 5px 0 0' }}>
                    EXERCISES
                </Box>
                {customList(left, false)}
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
                    <Button
                    sx={{ m: 0.5, fontSize: '1.5rem', height: 'max-content', border: '2px solid silver', borderRadius: '10px' }}
                        variant="contained"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                </Button>
            </Box>
            <Box > {/* list 2 */}
                <DaysSelector day={day} setDay={setDay} />
                {showSelectedList(day)}
            </Box>
        </Stack >
    );
}