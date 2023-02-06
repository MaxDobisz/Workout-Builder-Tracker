import { useState } from 'react';
import { Stack, Box, Button } from "@mui/material";
import { BuilderPlanGenerator } from "../components/BuilderPlanGenerator";
import { BuilderPlanResult } from "../components/BuilderPlanResult";
import { DaysContextProvider } from '../context/daysContext';


export const Builder = () => {
    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
        //if step === 1 &&& days are not empty:
        setShowResult(true)
    }

    return (
        <DaysContextProvider>
            <Stack direction='column' alignItems='center'>
                {showResult ? <BuilderPlanResult /> : <BuilderPlanGenerator />}
                <Box>
                    <Button onClick={handleButtonClick} variant='contained' size="large">
                        {showResult === 1 ? 'next' : 'save'}
                    </Button>
                </Box>
            </Stack>
        </DaysContextProvider>
    )
}