import { useState } from 'react';
import { Stack } from "@mui/material";
import { BuilderGenerator } from "../components/BuilderGenerator";
import { BuilderResult } from "../components/BuilderResult";
import { DaysContextProvider } from '../context/daysContext';


export const Builder = () => {
    const [showResult, setShowResult] = useState(false);

    return (
        <DaysContextProvider>
            <Stack direction='column' alignItems='center'>
                {showResult ? <BuilderResult /> : <BuilderGenerator showResult={showResult} setShowResult={setShowResult} />}
            </Stack> 
        </DaysContextProvider>
    )
}