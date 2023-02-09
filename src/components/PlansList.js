import { Stack } from "@mui/system";
import { Plan } from "../components/Plan";
import uuid from "react-uuid";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export const PlansList = ({ plans, deletePlan }) => {
    const navigate = useNavigate();
    const handlButtonClick = () => navigate('/tracker');

    return (
        <Stack alignItems='center' gap='1rem'>
            <Stack direction='row' gap='1rem' justifyContent='center' flexWrap='wrap'>
                {plans.map(plan => <Plan {...plan} key={uuid()} deletePlan={deletePlan} itemNumber={plans.indexOf(plan) + 1} />)}

            </Stack >
            <Button onClick={handlButtonClick} variant="contained" sx={{ width: 'max-content', border: '2px solid silver', borderRadius: '10px' }}>Go to tracker</Button>
        </Stack>
    )
}