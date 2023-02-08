import { useState } from "react";
import { Box, Container } from "@mui/system";
import { PlansList } from "../components/PlansList";

export const Plans = () => {
    const [plans, setPlans] = useState(JSON.parse(localStorage.getItem('plans')));
    const deletePlan = id => {
        const updatedPlans = plans.filter(item => item.id !== id);
        localStorage.setItem('plans', JSON.stringify(updatedPlans));
        setPlans(updatedPlans);
    }

    return (
        <Container>
            {plans && plans.length > 0 ? <PlansList plans={plans} deletePlan={deletePlan} /> : <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '4rem', color: 'white' }}>You have no plans</Box>}
        </Container>
    )
}