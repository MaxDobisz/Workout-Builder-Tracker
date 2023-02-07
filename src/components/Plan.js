import { Typography, Button, Stack } from "@mui/material";
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { WeekDetailsModal } from "./WeekDetailsModal";

export const Plan = ({ creationDate, days, id, deletePlan }) => {
    const handleButtonOnClick = () => {
        console.log('show details')
    }

    const handleIconOnClick = (e) => {
        deletePlan(id)
        // const plansLS = localStorage.getItem('plans')
        // const filteredPlanLS = plansLS.filter()
    }



    return (
        <Stack alignItems='center' border='2px solid green' backgroundColor='white' width='20%'>
            {/* <LooksOneOutlinedIcon sx={{ margin: '0 auto' }} /> */}
            <Typography> Created: {creationDate}</Typography>
            <Typography> Days: XXX</Typography>
            <Stack direction='row' alignItems='center'>
                <WeekDetailsModal daysData={days} />
                <DeleteOutlineIcon onClick={handleIconOnClick} sx={{ border: '2px solid green', backgroundColor: 'white', margin: '0 auto' }} />
            </Stack>
        </Stack>
    )
}