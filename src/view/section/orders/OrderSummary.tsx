import React from 'react';
import Stack from "components/layouts/Stack";
import Img from "components/dataDisplay/Img";
import imgSmall1 from "assets/sample/43031.jpg";
import styles from 'view/pages/Orders.module.css'
import {Divider} from "@mui/material";

type propsType = {
    orderNumber?: string,
    date?: string,
    price?: number | string,
    currency?: 'rial' | 'tooman' | string,
    status?: string,
    paymentStatus: 'success' | 'onDelivery',
    images?: string[],
}
const OrderSummary: React.FC<propsType> = ({
                                               orderNumber,
                                               date,
                                               price,
                                               currency = 'tooman',
                                               status,
                                               paymentStatus,
                                               images = []
                                           }) => {
    const attributes = {}
    const currencyText = currency === 'tooman' ? "تومان" : (currency === 'rial' ? 'ریال' : currency);
    return (
        <Stack direction='column' className={` ${styles.orderRow} px-2 mt-4 `}>
            <Stack direction='row' className={` ${styles.orderDetail} `}>
                <div className={styles.orderCols}>{orderNumber}</div>
                <div className={styles.orderCols}>{date}</div>
                <div className={styles.orderCols}> {price} {currencyText}</div>
                <div className={styles.orderCols}>{status}  </div>
                <div className={styles.orderCols}>
                    {paymentStatus === 'success' &&
                        <div className='bg-emerald-200 text-emerald-800 px-3 py-1 rounded-md text-sm'> پرداخت موفق</div>
                    }
                    {paymentStatus === 'onDelivery' &&
                        <div className='bg-red-100 text-red-600 px-3 py-1 rounded-md  text-sm'>پرداخت در محل</div>
                    }
                </div>
                <div className={styles.orderCols}> link</div>
                <div className={styles.orderCols}> -</div>
                <div className={styles.orderCols}> {">"} </div>
            </Stack>
            {images?.length > 0 && <>
                <Divider/><Stack direction='row' spacing={1} className='py-3'>
                {images?.map((img:string)=><Img src={img}  width='50px' height='50px' className='rounded border border-gray-300' />) }
            </Stack>
            </>
            }


        </Stack>

    );
};

export default OrderSummary;