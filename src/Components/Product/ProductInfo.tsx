import React from 'react';
import Stack from "../Layouts/Stack";
import styles from './ProductInfo.module.css'
import Badge from "../DataDisplay/Badge";
import Select from "../Form/Select";
import type {itemType} from 'Components/Form/Select'
import Button from "../Form/Button";

// type sizeType = {
//     key: string | number,
//     value: string | number
// }
type propsType = {
    title: string,
    subTitle: string,
    price: number,
    currency?: 'rial' | 'tooman' | string,
    priceBeforeOff?: number,
    size: itemType[],
}
const ProductInfo: React.FC<propsType> = ({
                                              title,
                                              subTitle,
                                              price,
                                              currency='tooman',
                                              priceBeforeOff,
                                              size,
                                          }) => {
    const attributes = {}
    const salePercent = !!priceBeforeOff && priceBeforeOff > 0 ? Math.floor((priceBeforeOff - price) * 100 / priceBeforeOff) : 0;
    const currencyTitle = (currency === 'rial') ? 'ریال' : (currency === 'tooman' ? 'تومان' : currency);
    const productPrice = <><span> {price.toLocaleString('EN-US')} </span>&nbsp;{currencyTitle} </>;
    return (
        <Stack direction='column' spacing={1}>
            <h3 className={styles.productTitle}> {title} </h3>
            <h6 className={styles.productSub}> {subTitle}</h6>
            <Stack direction='column' extraClass={{border: 1, borderRadius: 2, my: 2, borderColor: '#e1e1e1', py: 1}}>
                {!!priceBeforeOff && <div className={styles.productOff}>&nbsp;{priceBeforeOff}&nbsp;</div>}
                <div className={styles.productPrice}>
                    {salePercent > 0 ? <Badge
                        color='error'
                        variant='standard'
                        badgeContent={`${salePercent}%`}
                    >
                        {productPrice}
                    </Badge> : productPrice}


                </div>
            </Stack>

            <div>
                <Select items={size} label='انتخاب سایز' placeholder='انتخاب کنید' />
            </div>
            <div> <Button variant='contained' color='success' > افزوددن به سبد خرید</Button></div>
        </Stack>
    );
};

export default ProductInfo;