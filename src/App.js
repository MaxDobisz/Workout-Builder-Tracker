import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";

export const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRoutes />
        </BrowserRouter>
    )
}