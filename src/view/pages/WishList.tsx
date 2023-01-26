import React from 'react';
import LayoutFull from "../../components/layouts/LayoutFull";
import p1 from "../../assets/sample/p1.jpg";
import p2 from "../../assets/sample/p2.jpg";
import p3 from "../../assets/sample/p3.jpg";
import p4 from "../../assets/sample/p4.jpg";
import p5 from "../../assets/sample/p5.jpg";
import p6 from "../../assets/sample/p6.jpg";
import ProductCard from "../../components/product/ProductCard";
import Row from "../../components/layouts/Row";
import Col from "../../components/layouts/Col";
type propsType = {
}
const WishList:React.FC<propsType> = () => {
    const itemList = [
        {
            price: 190999,
            priceBeforeOff: 250999,
            image: p1,
            brand: 'NoBrand',
            subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
            showSalePercent: true,
            maxWidth: 100,
            maxWidthUnit: '%',
        }, {
            price: 190999,
            priceBeforeOff: 250999,
            image: p2,
            brand: 'NoBrand',
            subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
            showSalePercent: true,
            maxWidth: 100,
            maxWidthUnit: '%',
        }, {
            price: 190999,
            priceBeforeOff: 250999,
            image: p3,
            brand: 'NoBrand',
            subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
            showSalePercent: true,
        }, {
            price: 190999,
            priceBeforeOff: 250999,
            image: p4,
            brand: 'NoBrand',
            subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
            showSalePercent: true,
        }, {
            price: 190999,
            priceBeforeOff: 250999,
            image: p5,
            brand: 'NoBrand',
            subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
            showSalePercent: true,

        }, {
            price: 190999,
            priceBeforeOff: 250999,
            image: p6,
            brand: 'NoBrand',
            subTitle: 'نیم بوت مردانه کانژوک Kanzhouk کد M245',
            showSalePercent: true,
        },

    ];


    const items = itemList.map((item, index) => <Col key={index} col={{xs:12,sm:6,md:4, lg:3}} ><ProductCard
        price={item.price}
        priceBeforeOff={item.priceBeforeOff}
        image={item.image}
        brand={item.brand}
        subTitle={item.subTitle}
        showSalePercent={item.showSalePercent}
        maxWidth={100}
        maxWidthUnit='%'
        wishlist={true}
    /></Col>)
const attributes = {}
    return (
        <LayoutFull>
            <Row>
                {items}
            </Row>
        </LayoutFull>
    );
};

export default WishList;