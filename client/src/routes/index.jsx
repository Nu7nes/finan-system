import Home from "@/pages/Home";
import Redirect from "@/pages/Redirect";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Panel from "@/pages/Panel";
import Inicial from "@/pages/Dashboard/Inicial";

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/redirect" element={<Redirect />} />
                <Route
                    path="painel/*"
                    element={
                        // <PrivateRoutes>
                            <Panel>
                                <Routes >
                                    <Route
                                        index
                                        exact
                                        path="/dashboard/inicial"
                                        element={<Inicial />}
                                    />
                                </Routes>
                            </Panel>
                        // </PrivateRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
