import React from 'react';
import "App.css";
import TestComponent from "view/pages/TestComponent";
import Home from "view/pages/Home";
import Product from "view/pages/Product";

import {CssBaseline, ThemeProvider} from "@mui/material";
import {appTheme} from "./themes/theme";
import RTL from "./themes/RTL";
import Profile from "./view/pages/Profile";
import Address from "./view/pages/Address";
import ChangePassword from "view/pages/ChangePassword";
import Orders from "./view/pages/Orders";
import Order from "./view/pages/Order";
import WishList from "./view/pages/WishList";
import {Routes, Route} from 'react-router-dom';
import LayoutFull from "./components/layouts/LayoutFull";
import NotFound from "./view/pages/NotFound";

function App() {
    return (
        <RTL>
            <ThemeProvider theme={appTheme}>
                <CssBaseline enableColorScheme/>
                <div className="App" dir="rtl">
                        <Routes>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/product" element={<Product/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/address" element={<Address/>}/>
                            <Route path="/changePassword" element={<ChangePassword/>}/>
                            <Route path="/orders" element={<Orders/>}/>
                            <Route path="/order" element={<Order/>}/>
                            <Route path="/wishList" element={<WishList/>}/>
                        </Routes>
                    {/*<Home/>*/}
                    {/*<Product />*/}
                    {/*<TestComponent />*/}
                    {/*<Profile />*/}
                    {/*<Address />*/}
                    {/*<ChangePassword />*/}
                    {/*<Orders />*/}
                    {/*<Order />*/}
                    {/*<WishList />*/}
                </div>
            </ThemeProvider>
        </RTL>

    );
}

export default App;
