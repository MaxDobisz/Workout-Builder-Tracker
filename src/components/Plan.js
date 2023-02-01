import { Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Plan = () => {
    const handleButtonOnClick = () => {
        console.log('show details')
    }

    const handleIconOnClick = () => {
        console.log('delete item')
    }

    return (
        <Stack border='2px solid green' backgroundColor='white'>
            <LooksOneOutlinedIcon sx={{ margin: '0 auto' }} />
            <Typography> Created: 20.01.2023</Typography>
            <Typography> Days: 4</Typography>
            <Stack direction='row' alignItems='center'>
                <Button onClick={handleButtonOnClick}>Details</Button>
                <DeleteOutlineIcon onClick={handleIconOnClick} sx={{ border: '2px solid green', backgroundColor: 'white', margin: '0 auto' }} />
            </Stack>
        </Stack>
    )
}