import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import { PlanAccordionDetails } from './PlanAccordionDetails';
import uuid from 'react-uuid';

export const PlanAccordion = ({ plans, plan }) => {
    return (
        <Stack borderRadius='10px 10px 0 0' border='2px solid silver'>
            <Stack direction={{ sm: 'row' }} justifyContent='center' gap={{ sm: '2rem' }} bgcolor='steelBlue2' borderRadius='10px 10px 0 0' sx={{
                textShadow: '0px 0px 3px white',
            }} >
                <Typography textAlign='center' fontSize='1.5rem'> PLAN: {plans.indexOf(plan) + 1}</Typography>
                <Typography textAlign='center' fontSize='1.5rem'> {plan.creationDate}</Typography>
                <Typography textAlign='center' fontSize='1.5rem'> Days: {Object.keys(plan.days).length}</Typography>
            </Stack>
            <Stack>
                {Object.keys((plan.days)).map(day => {
                    return (
                        <Accordion disableGutters square key={uuid()}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography m='0 auto' fontWeight='500'>{day.toUpperCase()}</Typography>
                            </AccordionSummary>
                            {
                                plan.days[day].map(exercise => {
                                    return (
                                        <PlanAccordionDetails exercise={exercise} key={uuid()} />
                                    )
                                })
                            }
                        </Accordion>
                    )
                })}
            </Stack>
        </Stack>
    );
}