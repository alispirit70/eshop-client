import React from 'react';
import Row from "Components/Layouts/Row";
import Col from "Components/Layouts/Col";
import SlideImg from "Components/DataDisplay/SlideImg";
import img1 from 'Assets/sample/1671093156.jpg'

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