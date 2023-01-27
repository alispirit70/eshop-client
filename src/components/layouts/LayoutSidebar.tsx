import React, {ReactNode} from 'react';
import Header from "../../view/section/header/Header";
import Container from "./Container";
import LayoutFull from "./LayoutFull";
import Col from "./Col";
import Row from "./Row";
import sidebar from "view/section/profile/Sidebar";

type propsType = {
    children?: ReactNode,
    sidebar?: ReactNode,
}
const LayoutSidebar: React.FC<propsType> = ({
                                             children = '',
                                                sidebar=''
                                         }) => {
    return (
        <LayoutFull>
            <Row>
                <Col col={{xs: 12, md: 4, lg: 3}}>
                    {sidebar}
                </Col>
                <Col col={{xs: 12, md: 8, lg: 9}}>
                    {children}
                </Col>
            </Row>
        </LayoutFull>
    );
};

export default LayoutSidebar;