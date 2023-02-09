import { Typography, Stack, Box, Tooltip, IconButton } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { WeekDetailsModal } from "./WeekDetailsModal";

export const Plan = ({ creationDate, days, id, deletePlan, itemNumber }) => {
    const handleIconOnClick = () => {
        deletePlan(id);
    }

    return (
        <Stack alignItems='center' border='2px solid black' backgroundColor='white' p='1rem' borderRadius='5px'>
            <Box fontWeight='700' width={'1rem'} height={'1rem'} backgroundColor='black' color='white' display='flex' justifyContent={'center'} alignItems='center' borderRadius={'50%'} p='1rem'>{itemNumber}</Box>
            <Typography> Created: {creationDate}</Typography>
            <Typography> Days: {Object.keys(days).length}</Typography>
            <Stack direction='row' alignItems='center'>
                <WeekDetailsModal daysData={days} />
                <Tooltip title="Delete">
                    <IconButton onClick={handleIconOnClick}>
                        <DeleteOutlineIcon sx={{ margin: '0 auto' }} />
                    </IconButton>
                </Tooltip>
            </Stack>
        </Stack>
    )
}