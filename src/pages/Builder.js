import { useState } from 'react';
import { Stack } from "@mui/material";
import { BuilderPlanGenerator } from "../components/BuilderPlanGenerator";
import { BuilderPlanResult } from "../components/BuilderPlanResult";
import { DaysContextProvider } from '../context/daysContext';


export const Builder = () => {
    const [showResult, setShowResult] = useState(false);

    return (
        <DaysContextProvider>
            <Stack direction='column' alignItems='center'>
                {showResult ? <BuilderPlanResult /> : <BuilderPlanGenerator showResult={showResult} setShowResult={setShowResult} />}
            </Stack> 
        </DaysContextProvider>
    )
}