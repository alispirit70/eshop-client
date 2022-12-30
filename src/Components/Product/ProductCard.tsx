import React, {ReactNode, useState} from 'react';
import Row from "Components/Layouts/Row";
import Col from "Components/Layouts/Col";
import styles from './ProductCard.module.css';

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
                                              link
                                          }) => {
    // const [showPercent, setShowPercent] = useState(false)
    var showPercent = showSalePercent
    const attributes = {}
    const width = maxWidth + maxWidthUnit;

    if (price !== 0 && !!priceBeforeOff && priceBeforeOff !== 0 && showSalePercent) {
        showPercent = true;
    }
    const product = (
        <div className={styles.productCard} style={{maxWidth: width}}>
            <img className={styles.productImg} src={image} alt={alt}/>
            {showPercent && <div className={styles.discunt}>{Math.floor((priceBeforeOff - price)*100 / price)}%</div>}
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
                <>
                    {product}
                    {/*{!!link && <a href="">{product}</a>}*/}
                    {/*{!link && {product}}*/}
                </>
            </Col>
        </Row>
    );
};

export default ProductCard;