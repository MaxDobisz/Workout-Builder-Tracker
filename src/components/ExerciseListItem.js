import uuid from 'react-uuid';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Stack, Divider } from '@mui/material';


import { ExerciseDetailsModal } from './ExerciseDetailsModal';
import { Box } from '@mui/material';

export const ExerciseListItem = ({ items, checkedItems, handleToggle }) => {
    return (
        <List sx={{ p: 0, width: '100%' }} dense component="div" role="list">
            {items.map((value) => {
                const labelId = `transfer-list-item-${value}-label`;
                return (
                    <Box key={uuid()}>
                        <Stack flexDirection='row' alignItems='center'> {/* 1 exercise on the list */}
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
                            </ListItem>
                            <ExerciseDetailsModal exercise={value} />
                        </Stack>
                        <Divider />
                    </Box>
                );
            })}
        </List>
    )
}
