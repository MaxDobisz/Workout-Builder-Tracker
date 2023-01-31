import { BuilderPlanCreator } from "../components/BuilderPlanCreator"
import { BuilderPlanResult } from "../components/BuilderPlanResult"
import { useState } from 'react';
import { Stack, Box, Button } from "@mui/material"


export const Builder = () => {
    const [step, setStep] = useState(1);

    const handleButtonClick = () => {
        //if step === 1 &&& days are not empty:
        setStep(2);
    }

    return (
        <Stack direction='column' sx={{ alignItems: 'center' }}>
            {step === 1 && <BuilderPlanCreator />}
            {step === 2 && <BuilderPlanResult />}

            <Box>
                <Button onClick={handleButtonClick} variant='contained' size="large" >
                    {step === 1 ? 'next' : 'save'}
                </Button>
            </Box>
        </Stack>
    )
}