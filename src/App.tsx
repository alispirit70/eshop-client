import React from 'react';
import TestComponent from "View/Pages/TestComponent";
import Home from "View/Pages/Home";
import "App.css";
import Product from "View/Pages/Product";

import {CssBaseline, ThemeProvider} from "@mui/material";
import {appTheme} from "./themes/theme";
import RTL from "./themes/RTL";

function App() {
    return (
        <RTL>
            <ThemeProvider theme={appTheme}>
                <CssBaseline enableColorScheme/>
                <div className="App" dir="rtl">
                    {/*<Product />*/}
                    <Home/>
                    {/*<TestComponent />*/}
                </div>
            </ThemeProvider>
        </RTL>

    );
}

export default App;
