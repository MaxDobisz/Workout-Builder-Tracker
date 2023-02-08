import { Container, Box } from "@mui/system";
import { TrackerPlans } from "../components/TrackerPlans";

export const Tracker = () => {
    const plans = JSON.parse(localStorage.getItem('plans'));

    return (
        <Container>
            {plans && plans.length > 0 ? <TrackerPlans plans={plans} /> : <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '4rem', color: 'white' }}>You have no plans</Box>}
        </Container>
    )
}