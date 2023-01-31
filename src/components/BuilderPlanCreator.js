import { Container, Stack, Box, Button } from "@mui/material"
import { ExercisesSelector } from "../components/ExercisesSelector"
import { EquipmentSwitch } from "../components/EquipmentSwitch"
import { ExercisesTransfer } from "../components/ExercisesTransfer"

export const BuilderPlanCreator = () => {

    return (
        <Container maxWidth='lg' sx={{ display: 'flex', height: '90%', justifyContent: 'center', alignItems: 'center' }} >
            <Stack spacing={3}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                    <ExercisesSelector />
                    <EquipmentSwitch />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ExercisesTransfer />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained'>Next</Button>
                </Box>

            </Stack>
        </Container>
    )
}