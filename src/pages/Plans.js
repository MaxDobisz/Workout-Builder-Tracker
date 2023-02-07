import { useEffect } from "react";
import { Stack } from "@mui/system";
import { Plan } from "../components/Plan";
import uuid from "react-uuid";

export const Plans = ({ plans }) => {
    const plansFromLS = JSON.parse(localStorage.getItem('plans'))

    return (
        <Stack direction='row' justifyContent='center' gap='1rem' >
            {
                plansFromLS.map(plan => {
                    return <Plan {...plan} key={uuid()} />
                })
            }
        </Stack >
    )
}