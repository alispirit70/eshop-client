import React from 'react';
import small1 from "assets/sample/unsplash-10.jpg";
import big1 from "assets/sample/unsplash-10-large.jpg";
import GallerySlider from "components/sliders/GallerySlider";
import ProductInfo from "components/product/ProductInfo";

import img1 from "assets/sample/1671093156.jpg";
import img2 from "assets/sample/1671093211.jpg";
import img3 from "assets/sample/1671093211.jpg";
import img4 from "assets/sample/1671093211.jpg";
import Container from "../layouts/Container";
import Row from "../layouts/Row";
import Col from "../layouts/Col";
const imageData = [{src: img1,id:11}, {src: img2,id:12}, {src: img3,id:13}, {src: img4,id:14}];

type propsType = {
}
const ProductSummary:React.FC<propsType> = () => {
const attributes = {}
    return (
        <Container>
            <Row>
                <Col col={{xs:12,md:7}} >
                    <GallerySlider height={500} width={400} sliderWidth={95} sliderHeight={115} images={imageData}/>
                </Col>
                <Col col={{xs:12,md:5}} >
                    <ProductInfo
                        price={400000}
                        title='پالتو کوتاه زنانه ورساچه جینز Versace Jeans کد 3WJA260'
                        subTitle='Versace Jeans'
                        priceBeforeOff={500000}
                        currency='tooman'
                        size={[{label:'37' , value:'37'},{label:'38' , value:'38'}]}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductSummary;