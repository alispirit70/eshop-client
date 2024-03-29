import React, {ReactNode, useState} from 'react';
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
import styles from './ProductCard.module.css';
import {Box} from "@mui/material";
import Stack from "../layouts/Stack";

type propsType = {
    image?: string,
    alt?: string,
    maxWidth?: number,
    maxWidthUnit?: string,
    brand?: string,
    subTitle?: string,
    priceBeforeOff?: number,
    price: number,
    showSalePercent?: boolean,
    link?: string,
    wishlist?: boolean,
}
const ProductCard: React.FC<propsType> = ({
                                              image,
                                              alt,
                                              maxWidth = 100,
                                              maxWidthUnit = "%",
                                              brand,
                                              subTitle,
                                              priceBeforeOff = 0,
                                              price,
                                              showSalePercent = false,
                                              link,
                                              wishlist=false,
                                          }) => {
    // const [showPercent, setShowPercent] = useState(false)
    var showPercent = showSalePercent
    const attributes = {}
    const width = maxWidth + maxWidthUnit;

    if (price !== 0 && !!priceBeforeOff && priceBeforeOff !== 0 && showSalePercent) {
        showPercent = true;
    }
    const product = (
        <div className={`${styles.productCard} relative`} style={{maxWidth: width}}>
            <img className={styles.productImg} src={image} alt={alt}/>
            {wishlist && <Stack className='absolute w-14 h-14 rounded-full bg-gray-100 top-2 right-2 border  border-gray-100  hover:border-gray-200' alignItems='center' justifyContent='center'> <span>..</span> </Stack>}
            {showPercent &&
                <div className={styles.discount}>{Math.floor((priceBeforeOff - price) * 100 / price)}%</div>}
            <div className={styles.productDetail}>
                <div>
                    <div className={styles.titleSec}>
                        <div className={styles.productOffPrice}>{!!priceBeforeOff && priceBeforeOff}</div>
                        <div className={styles.productBrand}>{!!brand && brand}</div>
                    </div>
                </div>
                <div>
                    <div className={styles.titleSec}>
                        <div className={styles.productPrice}>{!!price && price}</div>
                        <div className={styles.productSummary}>{!!subTitle && subTitle}</div>
                    </div>

                </div>
            </div>
        </div>
    )
    return (
        <Row>
            <Col col={{xs: 12}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>

                    {product}
                    {/*{!!link && <a href="">{product}</a>}*/}
                    {/*{!link && {product}}*/}
                </Box>
            </Col>
        </Row>
    );
};

export default ProductCard;