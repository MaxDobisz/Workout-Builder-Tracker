import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import { NumberSelector } from './NumberSelector';
import { Box } from '@mui/material';

export const PlanAccordion = ({ plans, plan }) => {
    return (
        <Stack borderRadius='5px'>
            <Stack direction={{ sm: 'row' }} justifyContent='center' gap={{ sm: '2rem' }} bgcolor='steelBlue2' borderRadius='5px 5px 0 0' sx={{
                textShadow: '0px 0px 3px white',
            }} >
                <Typography textAlign='center' fontSize='1.5rem'> PLAN: {plans.indexOf(plan) + 1}</Typography>
                <Typography textAlign='center' fontSize='1.5rem'> {plan.creationDate}</Typography>
                <Typography textAlign='center' fontSize='1.5rem'> Days: {Object.keys(plan.days).length}</Typography>
            </Stack>
            <Stack>
                {Object.keys((plan.days)).map(day => {
                    return (
                        <Accordion disableGutters square>
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
                                            <Stack direction='row' justifyContent='space-between' alignItems='center' gap='1rem' fontWeight='500'>
                                                {exercise.name.toUpperCase()}
                                                <Stack direction={'row'} gap='1.5rem'>
                                                    <Stack direction='row' alignItems='center' fontWeight='400'>
                                                        <Box mr='1rem'>
                                                            Sets:
                                                        </Box>

                                                        <NumberSelector optionsNumber={exercise.sets} />
                                                        {` / ${exercise.sets}`}
                                                    </Stack>
                                                    <Stack direction='row' alignItems='center' fontWeight='400'>
                                                        <Box mr='1rem'>
                                                            Reps:
                                                        </Box>
                                                        <NumberSelector optionsNumber={exercise.reps} />
                                                        {` / ${exercise.reps}`}
                                                    </Stack>
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