import React from 'react';
import img1 from "assets/sample/1671093077.jpg";
import img2 from "assets/sample/1671093275.jpg";
import img3 from "assets/sample/1671093156.jpg";
import img4 from "assets/sample/1671093211.jpg";
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
import SimpleSlider from "../dataDisplay/SimpleSlider";

type propsType = {}
const MainSlides: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <>
            <Row>
                <Col col={{xs: 12, md: 8}} >
                        <SimpleSlider images={[{src: img1}, {src: img2}]} autoplay={true} slidesToShow={1} arrows={false} />
                </Col>
                <Col col={{xs: 12, md: 4}}>
                    <SimpleSlider images={[{src: img3}, {src: img4}]} autoplay={false} dots={false} arrows={false}/>
                </Col>
            </Row>
            <Row>
                <Col col={{xs: 12, md: 4}}>
                    <SimpleSlider images={[{src: img3}, {src: img4}]} autoplay={false} dots={false} arrows={false}/>
                </Col>
                <Col col={{xs: 12, md: 8}}>
                    <SimpleSlider images={[{src: img1}, {src: img2}]} autoplay={false} dots={false} arrows={true}/>
                </Col>
            </Row>
        </>

    );
};

export default MainSlides;