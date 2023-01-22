import React from 'react';
import "App.css";
import TestComponent from "view/pages/TestComponent";
import Home from "view/pages/Home";
import Product from "view/pages/Product";

import {CssBaseline, ThemeProvider} from "@mui/material";
import {appTheme} from "./themes/theme";
import RTL from "./themes/RTL";
import Profile from "./view/pages/Profile";

function App() {
    return (
        <RTL>
            <ThemeProvider theme={appTheme}>
                <CssBaseline enableColorScheme/>
                <div className="App" dir="rtl">
                    {/*<Home/>*/}
                    {/*<Product />*/}
                    {/*<TestComponent />*/}
                    <Profile />
                </div>
            </ThemeProvider>
        </RTL>

    );
}

export default App;
