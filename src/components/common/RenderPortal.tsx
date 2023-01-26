import React, {ReactNode} from 'react';
import {createPortal} from 'react-dom';
import {appTheme} from "../../themes/theme";
import RTL from "../../themes/RTL";
import {CssBaseline, ThemeProvider} from "@mui/material";

type propsType = {
    children: ReactNode,
    wrapperId?: string,
}

const RenderPortal: React.FC<propsType> = ({
                                               children,
                                               wrapperId = 'modal-root',
                                           }) => {
    const content = <RTL>
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme/>
            <div dir="rtl">{children}</div>
        </ThemeProvider>
    </RTL>
    let modalRoot = document.getElementById(wrapperId) as HTMLElement;
    return createPortal(content, modalRoot);
};

export default RenderPortal;