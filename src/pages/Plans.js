import { Grid } from "@mui/material";
import { Plan } from "../components/Plan";

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