import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { Provider } from "react-redux";
import { store } from "@/store/store";
// import "@/main.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./shared/themes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
