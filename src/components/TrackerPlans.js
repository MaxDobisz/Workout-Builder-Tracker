
import { Stack } from "@mui/system";
import { PlanAccordion } from './PlanAccordion';



export const TrackerPlans = ({ plans }) => {
    return (
        <Stack gap='1rem'>
            {plans.map(plan => {
                return (
                    <PlanAccordion plans={plans} plan={plan} />
                )
            })}
        </Stack>
    )
}