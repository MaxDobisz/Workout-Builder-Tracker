import uuid from 'react-uuid';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Stack, Divider, Icon, Button } from '@mui/material';
import { ExerciseDetailsModal } from './ExerciseDetailsModal';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { ExercisesContext } from '../context/context';
import DeleteIcon from '@mui/icons-material/Delete';

export const ExerciseListItem = ({ items, checkedItems, handleToggle, handleRemoveListItem, right }) => {
    const { includeEquipment } = useContext(ExercisesContext);

    const filteredExercisesBasedOnEquipmentAvailability = includeEquipment && !right ? items : items.filter(exer => exer.equipment === 'body weight');

    return (
        <List sx={{ p: 0, width: '100%' }} dense component="div" role="list">





            {filteredExercisesBasedOnEquipmentAvailability.map((value) => {
                const labelId = `transfer-list-item-${value}-label`;
                return (
                    <Box key={uuid()}>
                        <Stack flexDirection='row' alignItems='center'> {/* 1 exercise on the list */}
                            {right ?

                                <ListItem sx={{ p: 0 }} role="listitem"  >
                                    <ListItemIcon sx={{ bgColor: 'black' }} >
                                        <Button onClick={() => { handleRemoveListItem(value) }}><Icon><DeleteIcon /></Icon></Button>
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${value.name}`} />
                                </ListItem>
                                : 
                                <ListItem sx={{ p: 0 }} role="listitem" button onClick={handleToggle(value)}>
                                <ListItemIcon >
                                    <Checkbox
                                        checked={checkedItems.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{
                                            'aria-labelledby': labelId,
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`${value.name}`} />
                                </ListItem>}
                            <ExerciseDetailsModal exercise={value} />
                        </Stack>
                        <Divider />
                    </Box>
                );
            })}
        </List>
    )
}