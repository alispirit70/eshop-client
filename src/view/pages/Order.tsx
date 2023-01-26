import React from 'react';
import LayoutFull from "../../components/layouts/LayoutFull";
import OrderItem from "../section/orders/OrderItem";
import  p1 from 'assets/sample/922497.jpg'
import Stack from "../../components/layouts/Stack";
import Divider from "../../components/dataDisplay/Divider";
import Input from "../../components/form/Input";
import {splitCounter} from "../../utils/splitCounter";
import {titleCurrency} from "../../utils/currency";
type propsType = {
}
const Order:React.FC<propsType> = () => {
const currency = 'tooman';
const currencyTitle = titleCurrency('tooman')
    return (
        <LayoutFull>
            <Stack direction='column' spacing={3} className='mb-4'>
                <OrderItem
                    price={542000}
                    priceBeforeSale={500000}
                    count={1}
                    size='XL'
                    image={p1}
                    productCode='T23311001221004603'
                    link='http://sad.test'
                    color='نسکافه ای'
                    currency='tooman'
                    brand='جوتی جینز'
                    spec='عروسک پشمالوی کودک جوتی جینز '
                />
                <OrderItem
                    price={542000}
                    priceBeforeSale={500000}
                    count={1}
                    size='XL'
                    image={p1}
                    productCode='T23311001221004603'
                    link='http://sad.test'
                    color='نسکافه ای'
                    currency='tooman'
                    brand='جوتی جینز'
                    spec='عروسک پشمالوی کودک جوتی جینز '
                />
            </Stack>
            <Divider />
            <div className='my-4 py-4 border-0 bg-gray-100 px-4 rounded-xl'>
                <div style={{width:'300px'}}>
                    <Input label='کد تخفیف'/>
                </div>
            </div>
            <Divider />
            <div className='mt-4 py-4 border-0 bg-gray-100 px-4 rounded-xl' >
                <Stack  direction='column' spacing={2} className='sm:w100 md:w-1/2 lg:w-1/3'>
                    <Stack direction='row'  justifyContent='space-between'>
                        <div>قیمت کل سفارش :</div>
                        <div>{splitCounter(123434)} {currencyTitle}</div>
                    </Stack>
                    <Stack direction='row'  justifyContent='space-between' className='text-orange-600'>
                        <div>تخفیف  :</div>
                        <div>{splitCounter(123434)} {currencyTitle}</div>
                    </Stack>
                    <Stack direction='row'  justifyContent='space-between' className='text-emerald-600 font-bold'>
                        <div>قیمت قابل پرداخت  :</div>
                        <div>{splitCounter(123434)} {currencyTitle}</div>
                    </Stack>
                </Stack>
            </div>

        </LayoutFull>
    );
};

export default Order;