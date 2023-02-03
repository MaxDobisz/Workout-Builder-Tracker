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
    const [right, setRight] = useState([]);
    const { listOfExercises } = useContext(ExercisesContext);
    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

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

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = items => (
        <Stack sx={{ width: 400, height: 500, overflow: 'auto', bgcolor: 'white', border: '2px solid black', borderTop: 'none', alignItems: 'center' }} >
            {items && items.length === 0 ? <Box> no exercises </Box> : <ExerciseListItem items={items} checkedItems={checked} handleToggle={handleToggle} />
            }
        </Stack >
    );

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>{/* list 1 */}
                <Box sx={{ backgroundColor: 'white', p: '1rem', textAlign: 'center', fontWeight: '700', border: '2px solid black' }}>
                    EXERCISES
                </Box>
                {customList(left)}
            </Grid>
            <Grid item> {/* buttons */}
                <Grid container direction="column" alignItems="center">
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label="move all right"
                    >
                        ≫
                    </Button>
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
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="contained"
                        size="small"
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label="move all left"
                    >
                        ≪
                    </Button>
                </Grid>
            </Grid>
            <Grid item> {/* list 2 */}
                <DaysSelector />
                {customList(right)}
            </Grid>
        </Grid>
    );
}