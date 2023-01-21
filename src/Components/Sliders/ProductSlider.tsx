import React from 'react';
import Row from "Components/Layouts/Row";
import Col from "Components/Layouts/Col";
import ProductCard from "Components/Product/ProductCard";
import p1 from "Assets/sample/p1.jpg"
import p2 from "Assets/sample/p2.jpg"
import p3 from "Assets/sample/p3.jpg"
import p4 from "Assets/sample/p4.jpg"
import p5 from "Assets/sample/p5.jpg"
import p6 from "Assets/sample/p6.jpg"
import SimpleSlider from "../DataDisplay/SimpleSlider";

type propsType = {}

const itemList = [
    {
        price: 190999,
        priceBeforeOff: 250999,
        image: p1,
        brand: 'NoBrand',
        subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
        showSalePercent: true,
        maxWidth: 330,
        maxWidthUnit: 'px',
    }, {
        price: 190999,
        priceBeforeOff: 250999,
        image: p2,
        brand: 'NoBrand',
        subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
        showSalePercent: true,
        maxWidth: 330,
        maxWidthUnit: 'px',
    }, {
        price: 190999,
        priceBeforeOff: 250999,
        image: p3,
        brand: 'NoBrand',
        subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
        showSalePercent: true,
        maxWidth: 330,
        maxWidthUnit: 'px',
    }, {
        price: 190999,
        priceBeforeOff: 250999,
        image: p4,
        brand: 'NoBrand',
        subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
        showSalePercent: true,
        maxWidth: 330,
        maxWidthUnit: 'px',
    }, {
        price: 190999,
        priceBeforeOff: 250999,
        image: p5,
        brand: 'NoBrand',
        subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
        showSalePercent: true,
        maxWidth: 330,
        maxWidthUnit: 'px',
    }, {
        price: 190999,
        priceBeforeOff: 250999,
        image: p6,
        brand: 'NoBrand',
        subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
        showSalePercent: true,
        maxWidth: 330,
        maxWidthUnit: 'px',
    },

]
const ProductSlider: React.FC<propsType> = () => {
    const attributes = {}
    const items = itemList.map(item => <ProductCard
        price={item.price}
        priceBeforeOff={item.priceBeforeOff}
        image={item.image}
        brand={item.brand}
        subTitle={item.subTitle}
        showSalePercent={item.showSalePercent}
        maxWidth={item.maxWidth}
        maxWidthUnit={item.maxWidthUnit}
    />)
    return (
        <Row>
            <Col col={{xs: 12}}>
                <SimpleSlider
                    items={items}
                    slidesToShow={3}
                    autoplay={false}
                    arrows={false}
                    infinite={true}
                />
            </Col>
        </Row>
    );
};

export default ProductSlider;