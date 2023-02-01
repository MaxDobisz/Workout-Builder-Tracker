import { BuilderPlanCreator } from "../components/BuilderPlanCreator"
import { BuilderPlanResult } from "../components/BuilderPlanResult"
import { useState } from 'react';
import { Stack, Box, Button } from "@mui/material"

export const Builder = () => {
    const [showResult, setShowResult] = useState(false);

    const handleButtonClick = () => {
        //if step === 1 &&& days are not empty:
        setShowResult(true)
    }

    return (
        <Stack direction='column' alignItems='center'>
            {showResult ? <BuilderPlanResult /> : <BuilderPlanCreator />}
            <Box>
                <Button onClick={handleButtonClick} variant='contained' size="large">
                    {showResult === 1 ? 'next' : 'save'}
                </Button>
            </Box>
        </Stack>
    )
}