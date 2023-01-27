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

type itemType = {
    price: number,
    priceBeforeOff?: number ,
    image: string,
    brand: string,
    subTitle?: string,
}
type propsType = {
    items: itemType[],
    showSalePercent?: boolean,
    maxWidth: number,
    maxWidthUnit: string,
}

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
    }
]
const ProductSlider: React.FC<propsType> = ({   items,
                                                showSalePercent=true,
                                                maxWidth,
                                                maxWidthUnit,
}) => {
    const attributes = {}


    const itemList = items.map(item => {
        return <ProductCard
            price={item.price}
            priceBeforeOff={item.priceBeforeOff}
            image={item.image}
            brand={item.brand}
            subTitle={!!item.subTitle ? item.subTitle : ''}
            showSalePercent={showSalePercent}
            maxWidth={maxWidth}
            maxWidthUnit={maxWidthUnit}
        />
    })
    return (
        <Row>
            <Col col={{xs: 12}}>
                <SimpleSlider
                    items={itemList}
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