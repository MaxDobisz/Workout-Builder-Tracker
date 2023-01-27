import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PlanBuilder } from "./pages/PlanBuilder";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<PlanBuilder />} />
        </Routes>
    )
}