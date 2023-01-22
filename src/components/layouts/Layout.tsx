import React, {ReactNode} from 'react';
import Header from "../../view/section/Header/Header";
import Container from "./Container";
type propsType = {
    children?: ReactNode
}
const Layout:React.FC<propsType> = ({
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

export default Layout;