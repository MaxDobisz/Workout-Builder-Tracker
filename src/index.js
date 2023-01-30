import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material';
import { App } from "./App";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        steelBlue1: "#457AA5ff",
        steelBlue2: "#4E85AFff",
        starCommandBlue: "#3676A3ff",
        gunmetal: "#1B2932ff",
        camel: "#AE895Cff",
        camel2: "#B48B59ff",
        richBlack1: "#0A161Bff",
        richBlack2: "#020505ff",
        richBlack3: "#060B0Eff",
        khaki: "#BDB098ff",
        silver: "#B1BFC3",
        darkBlue: "#0F4273"
    }
});

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);