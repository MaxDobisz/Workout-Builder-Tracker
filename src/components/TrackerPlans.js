import { Stack } from "@mui/system";
import uuid from "react-uuid";
import { PlanAccordion } from './PlanAccordion';

export const TrackerPlans = ({ plans }) => {
    return (
        <Stack gap='1rem' maxHeight='85vh' maxWidth='max-content' overflow='auto' margin='0 auto' borderRadius='5px'>
            {plans.map(plan => <PlanAccordion plans={plans} plan={plan} key={uuid()} />)}
        </Stack>
    )
}