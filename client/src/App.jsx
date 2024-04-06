import { useState } from "react";
import Index from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "./shared/themes";
import { useSelector } from "react-redux";

function App() {
    const currentColorMode = useSelector(
        (state) => state.user.config.color_mode
    );

    return (
        <ThemeProvider
            theme={
                (currentColorMode === "light" && LightTheme) ||
                (currentColorMode === "dark" && DarkTheme)
            }
        >
            <CssBaseline />
            <Index />
        </ThemeProvider>
    );
}

export default App;
