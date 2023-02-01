import { margin, Stack, Box } from "@mui/system"
import { Plan } from "../components/Plan"
import Grid from '@mui/material/Unstable_Grid2';

export const Plans = () => {
    return (
        <Grid container spacing={2} sx={{ width: '70%', margin: '0 auto' }}>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
            <Grid lg={2}>
                <Plan />
            </Grid>
        </Grid >
    )
}