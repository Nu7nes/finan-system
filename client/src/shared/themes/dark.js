import { createTheme } from "@mui/material";
import Outfit from "@/assets/fonts/Outfit-VariableFont_wght.ttf";
export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#d7352b",
        },
        secondary: {
            main: "#ffa746",
        },
        background: {
            default: "#0f0f0f",
        },
        gray: {
            main: "#adadad",
            light: "#656565",
            dark: "#d2d2d2",
        },
        chart: {
            red: "#d7352b",
            orange: "#ffa746",
            blue: "#5b97ee",
            ocean: "#92c7ff",
            yellow:"#ffd976",
            redLight: "#ff6a55",
        }
    },
    typography: {
        fontFamily: "Outfit, Arial",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Outfit';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Outfit'), local('Outfit-Regular'), url(${Outfit}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
});
