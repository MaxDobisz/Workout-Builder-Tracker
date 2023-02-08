import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import { NumberSelector } from './NumberSelector';

export const PlanAccordion = ({ plans, plan }) => {
    console.log(plan.days)
    return (
        <Stack>
            <Stack direction='row' justifyContent='center' gap='2rem' sx={{ bgcolor: 'white' }}>
                <Typography textAlign='center' fontSize='1.5rem'> PLAN: {plans.indexOf(plan) + 1}</Typography>
                <Typography textAlign='center' fontSize='1.5rem'> {plan.creationDate}</Typography>
                <Typography textAlign='center' fontSize='1.5rem'> Days: {Object.keys(plan.days).length}</Typography>
            </Stack>
            <Stack>
                {Object.keys((plan.days)).map(day => {
                    return (
                        <Accordion disableGutters>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography m='0 auto'>{day.toUpperCase()}</Typography>

                            </AccordionSummary>
                            {
                                plan.days[day].map(exercise => {
                                    return (
                                        <AccordionDetails>
                                            <Stack direction='row' alignItems='center' gap='1rem' fontWeight='500'>
                                                {exercise.name.toUpperCase()}
                                                <Stack direction='row' alignItems='center' fontWeight='400'>
                                                    {`Sets: ${exercise.sets}`}
                                                    <NumberSelector />
                                                </Stack>
                                                <Stack direction='row' alignItems='center' fontWeight='400'>
                                                    {`Reps: ${exercise.reps}`}
                                                    <NumberSelector />
                                                </Stack>
                                            </Stack>
                                        </AccordionDetails>
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