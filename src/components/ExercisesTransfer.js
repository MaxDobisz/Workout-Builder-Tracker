import { useContext, useEffect, useState } from 'react';
import { Box, Grid, Button, Stack } from '@mui/material';
import { DaysSelector } from './DaysSelector';
import { ExerciseListItem } from './ExerciseListItem';
import { ExercisesContext } from '../context/context';

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

    const [monday, setMonday] = useState([]); 
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);
    const [saturday, setSaturday] = useState([]);
    const [sunday, setSunday] = useState([]);


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
                setMonday(monday.concat(leftChecked));
                break;
            case 'tuesday':
                setTuesday(tuesday.concat(leftChecked));
                break;
            case 'wednesday':
                setWednesday(wednesday.concat(leftChecked));
                break;
            case 'thursday':
                setThursday(thursday.concat(leftChecked));
                break;
            case 'friday':
                setFriday(friday.concat(leftChecked));
                break;
            case 'saturday':
                setSaturday(saturday.concat(leftChecked));
                break;
            case 'sunday':
                setSunday(sunday.concat(leftChecked));
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
                setMonday(monday.filter(item => item !== value));
                break;
            case 'tuesday':
                setTuesday(tuesday.filter(item => item !== value));
                break;
            case 'wednesday':
                setWednesday(wednesday.filter(item => item !== value));
                break;
            case 'thursday':
                setThursday(thursday.filter(item => item !== value));
                break;
            case 'friday':
                setFriday(friday.filter(item => item !== value));
                break;
            case 'saturday':
                setSaturday(saturday.filter(item => item !== value));
                break;
            case 'sunday':
                setSunday(sunday.filter(item => item !== value));
                break;
            default:
                console.log('error');
        }
    }


    const customList = (items, right) => (

        // if items are from left render normal, otherwise render another
        <Stack sx={{ width: 400, height: 500, overflow: 'auto', bgcolor: 'white', border: '2px solid black', borderTop: 'none', alignItems: 'center' }}>
            {items && items.length === 0 ? <Box> no exercises </Box> : <ExerciseListItem items={items} checkedItems={checked} handleToggle={handleToggle} handleRemoveListItem={handleRemoveListItem} right={right} />
            }
        </Stack >
    );



    const showSelectedList = (day) => {
        switch (day) {
            case 'monday':
                return customList(monday, true);

            case 'tuesday':
                return customList(tuesday, true);
            case 'wednesday':
                return customList(wednesday, true);
            case 'thursday':
                return customList(thursday, true);
            case 'friday':
                return customList(friday, true);
            case 'saturday':
                return customList(saturday, true);
            case 'sunday':
                return customList(sunday, true);
            default:
                console.log('error');
        }
    }

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{/* list 1 */}
                <Box display='flex' justifyContent='center' alignItems='center' sx={{ height: '4rem', backgroundColor: 'white', textAlign: 'center', fontWeight: '700', border: '2px solid black' }}>
                    EXERCISES
                </Box>
                {customList(left, false)}
            </Grid>
            <Grid item> {/* buttons */}
                <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                </Grid>
            </Grid>
            <Grid item> {/* list 2 */}
                <DaysSelector day={day} setDay={setDay} />
                {showSelectedList(day)}
            </Grid>
        </Grid>
    );
}