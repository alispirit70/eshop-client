import React from 'react';
import Stack from "../../../components/layouts/Stack";
import Img from "../../../components/dataDisplay/Img";
import {titleCurrency} from "../../../utils/currency";
import {splitCounter} from "../../../utils/splitCounter";

type propsType = {
    image: string,
    brand: string,
    spec: string,
    link: string,
    size: string,
    color: string,
    productCode: string,
    priceBeforeSale?: string | number,
    price: string | number,
    count: number,
    currency: 'tooman' | 'rial' | 'string'
}
const OrderItem: React.FC<propsType> = ({
                                            image,
                                            brand,
                                            spec,
                                            link,
                                            size,
                                            color,
                                            productCode,
                                            priceBeforeSale,
                                            price,
                                            count,
                                            currency,
                                        }) => {
    const attributes = {}
    return (
        <Stack direction='row' alignItems='stretch'  className='border border-gray-300 bg-gray-100 rounded-xl overflow-hidden'>
            <div className='grow-0'  >
                <Img src={image} alt={spec} width='150px' height='100%' imageClassName='object-cover object-center ' className='h-full' />
            </div>
            <Stack direction='row' alignItems='center' justifyContent='space-between' className='grow px-6 py-5'  >
                <Stack direction='column' spacing={1} className='	'>
                    <div className='font-bold text-xl'>{brand}</div>
                    <div>{spec}</div>
                    <div>
                        سایز : {size}
                        &nbsp;-&nbsp;
                        رنگ : {color}
                    </div>
                    <div>
                        کد محصول :
                        {productCode}
                    </div>
                </Stack>
                <Stack>
                    {!!priceBeforeSale &&<div className='line-through text-gray-400'>{splitCounter(priceBeforeSale!)}</div>}
                    <div className='text-emerald-400'>{splitCounter(price)} {titleCurrency(currency)}</div>
                </Stack>
                <div>
                    add {count} mines
                </div>
            </Stack>

        </Stack>
    );
};

export default OrderItem;