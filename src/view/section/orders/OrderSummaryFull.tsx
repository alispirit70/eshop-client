import React from 'react';
import styles from './Orders.module.css'

type propsType = {
    orderNumber?: string,
    date?: string ,
    price?: number | string,
    currency?: 'rial' | 'tooman' | string ,
    status?: string,
    paymentStatus: 'success' | 'onDelivery',
}
const OrderSummaryFull:React.FC<propsType> = () => {
const attributes = {}
    return (
        <div>

        </div>
    );
};

export default OrderSummaryFull;