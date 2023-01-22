import React from 'react';
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
import ProductCard from "components/product/ProductCard";
import p1 from "assets/sample/p1.jpg"
import p2 from "assets/sample/p2.jpg"
import p3 from "assets/sample/p3.jpg"
import p4 from "assets/sample/p4.jpg"
import p5 from "assets/sample/p5.jpg"
import p6 from "assets/sample/p6.jpg"
import SimpleSlider from "components/dataDisplay/SimpleSlider";

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