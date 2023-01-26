import React, {ReactNode} from 'react';
import Header from "../../view/section/header/Header";
import Container from "./Container";
import {Outlet} from "@mui/icons-material";
type propsType = {
    children?: ReactNode
}
const LayoutFull:React.FC<propsType> = ({
                                        children=''
                                    }) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default LayoutFull;