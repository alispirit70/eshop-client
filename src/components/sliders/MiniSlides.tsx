import React from 'react';
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
import SlideImg from "components/dataDisplay/SlideImg";
import img1 from 'assets/sample/1671093156.jpg'

type propsType = {}
const MiniSlides: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <>
            <Row>
                <Col col={{xs: 6, sm: 4, md: 2}}>
                    <SlideImg src={img1} width={210} height={210} maxWidthHeight={true}  link='http://sample.com'/>
                </Col>
                <Col col={{xs: 6, sm: 4, md: 2}}>
                    <SlideImg src={img1} width={210} height={210} maxWidthHeight={true}/>
                </Col>
                <Col col={{xs: 6, sm: 4, md: 2}}>
                    <SlideImg src={img1} width={210} height={210} maxWidthHeight={true}/>
                </Col>
                <Col col={{xs: 6, sm: 4, md: 2}}>
                    <SlideImg src={img1} width={210} height={210} maxWidthHeight={true}/>
                </Col>
                <Col col={{xs: 6, sm: 4, md: 2}}>
                    <SlideImg src={img1} width={210} height={210} maxWidthHeight={true}/>
                </Col>
                <Col col={{xs: 6, sm: 4, md: 2}}>
                    <SlideImg src={img1} width={210} height={210} maxWidthHeight={true}/>
                </Col>
            </Row>
        </>
    );
};

export default MiniSlides;