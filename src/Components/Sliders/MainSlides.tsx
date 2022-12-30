import React from 'react';
import SimpleSlider from "../DataDisplay/SimpleSlider";
import img1 from "Assets/sample/1671093077.jpg";
import img2 from "Assets/sample/1671093275.jpg";
import img3 from "Assets/sample/1671093156.jpg";
import img4 from "Assets/sample/1671093211.jpg";
import Row from "Components/Layouts/Row";
import Col from "Components/Layouts/Col";

type propsType = {}
const MainSlides: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <>
            <Row>
                <Col col={{xs: 12, md: 8}} >
                        <SimpleSlider images={[{src: img1}, {src: img2}]} autoplay={false} slidesToShow={1} arrows={false} />
                </Col>
                <Col col={{xs: 12, md: 4}}>
                    <SimpleSlider images={[{src: img3}, {src: img4}]} autoplay={false} dots={false}/>
                </Col>
            </Row>
            <Row>
                <Col col={{xs: 12, md: 4}}>
                    <SimpleSlider images={[{src: img3}, {src: img4}]} autoplay={false} dots={false}/>
                </Col>
                <Col col={{xs: 12, md: 8}}>
                    <SimpleSlider images={[{src: img1}, {src: img2}]} autoplay={false} dots={false}/>
                </Col>
            </Row>
        </>

    );
};

export default MainSlides;