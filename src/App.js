import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";
import background from './assets/homebg.jpg';
import CssBaseline from '@mui/material/CssBaseline';

export const App = () => {
    return (
        <>
            <CssBaseline />
            <div style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <BrowserRouter>
                    <Navbar />
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </>
    )
}