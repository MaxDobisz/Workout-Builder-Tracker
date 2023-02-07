import { Typography, Button, Stack } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { WeekDetailsModal } from "./WeekDetailsModal";

export const Plan = ({ creationDate, days, id, deletePlan }) => {
    const handleIconOnClick = () => {
        deletePlan(id)
    }

    return (
        <Stack alignItems='center' border='2px solid green' backgroundColor='white'>
            <Typography> Created: {creationDate}</Typography>
            <Typography> Days: {Object.keys(days).length}</Typography>
            <Stack direction='row' alignItems='center'>
                <WeekDetailsModal daysData={days} />
                <DeleteOutlineIcon onClick={handleIconOnClick} sx={{ border: '2px solid green', backgroundColor: 'white', margin: '0 auto' }} />
            </Stack>
        </Stack>
    )
}