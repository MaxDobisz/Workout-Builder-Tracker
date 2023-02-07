import { useState } from "react";
import { Stack } from "@mui/system";
import { Plan } from "../components/Plan";
import uuid from "react-uuid";

export const Plans = () => {
    const [plans, setPlans] = useState(JSON.parse(localStorage.getItem('plans')))
    const deletePlan = (id) => {
        //remove plan
        const updatedPlans = plans.filter(item => item.id !== id);
        //update local storage
        localStorage.setItem('plans', JSON.stringify(updatedPlans));
        //update compnent's plans
        setPlans(updatedPlans)
    }

    return (
        <Stack direction='row' justifyContent='center' gap='1rem' >
            {plans.map(plan => <Plan {...plan} key={uuid()} deletePlan={deletePlan} />)}
        </Stack >
    )
}