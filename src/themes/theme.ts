import {blue, pink, purple} from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";
import { Shadows } from "@mui/material/styles/shadows"


export const appTheme = createTheme({
    direction: 'rtl',
    shadows: Array(25).fill("none") as Shadows,
    typography: {
        fontFamily: [
            'IRANSans',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
    },
    palette: {
        primary: {
            light: blue[300],
            main: purple[500],
            dark: blue[700],
        },
        info: {
            light: pink[300],
            main: pink[500],
            dark: pink[700],
        },
    }
});