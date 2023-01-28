import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Builder } from "./pages/Builder";
import { Plans } from "./pages/Plans";
import { Tracker } from "./pages/Tracker";
import { News } from "./pages/News";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/news" element={<News />} />
        </Routes>
    )
}