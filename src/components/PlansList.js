import { Stack } from "@mui/system";
import { Plan } from "../components/Plan";
import uuid from "react-uuid";


export const PlansList = ({ plans, deletePlan }) => {
    return (
        <Stack direction='row' gap='1rem' justifyContent='center'>

            {plans.map(plan => <Plan {...plan} key={uuid()} deletePlan={deletePlan} itemNumber={plans.indexOf(plan) + 1} />)}
        </Stack >
    )
}