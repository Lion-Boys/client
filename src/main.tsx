import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Layout from "./Layout.tsx";
import Home from "./screens/home/index.tsx";
import NewParty from "./screens/party/new-party/index.tsx";
import CheckIn from "./screens/party/check-in/index.tsx";
import Party from "./screens/party/index.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="party" element={<Party />}>
                        <Route path="new" element={<NewParty />} />
                        <Route path="check-in" element={<CheckIn />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
