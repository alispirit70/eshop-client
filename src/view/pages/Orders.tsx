import React from 'react';
import styles from './Orders.module.css'
import Sidebar from "../section/profile/Sidebar";
import Stack from "../../components/layouts/Stack";
import Divider from "../../components/dataDisplay/Divider";
import LayoutSidebar from "../../components/layouts/LayoutSidebar";
import OrderSummary from "../section/orders/OrderSummary";
import imgSmall1 from "assets/sample/43031.jpg"

type propsType = {}
const Orders: React.FC<propsType> = () => {
    const images = [
        imgSmall1,
        imgSmall1
    ]
    return (
        <LayoutSidebar sidebar={<Sidebar/>}>
            <Stack direction="column" className='border-2 border-gray-300 rounded-2xl px-5 py-6 mb-6'>
                <Stack className='mb-2' direction={'row'} justifyContent={'space-between'}>
                    <h3 className='text-xl'>سفارش ها :</h3>
                </Stack>
                <Divider/>
                <Stack direction='column'>
                    <Stack
                        direction='column'
                        className={` ${styles.orderRow} px-2 mt-4  border-2 border-gray-300 bg-gray-100`}
                    >
                        <Stack direction='row' className={` ${styles.orderDetail} `}>
                            <div className={styles.orderCols}>شناسه سفارش</div>
                            <div className={styles.orderCols}>تاریخ</div>
                            <div className={styles.orderCols}>جمع کل</div>
                            <div className={styles.orderCols}>مرحله</div>
                            <div className={styles.orderCols}>وضعیت</div>
                            <div className={styles.orderCols}> فاکتور</div>
                            <div className={styles.orderCols}> پرداخت</div>
                            <div className={styles.orderCols}>جزئیات</div>
                        </Stack>
                    </Stack>
                    <OrderSummary
                        orderNumber='B38693527'
                        date='۱۴۰۱/۴/۲۷'
                        price='233000'
                        currency='tooman'
                        status='تحویل شده به مشتری'
                        paymentStatus='success'
                        images={images}
                    />
                    <OrderSummary
                        orderNumber='B38693527'
                        date='۱۴۰۱/۴/۲۷'
                        price='233000'
                        currency='tooman'
                        status='تحویل شده به مشتری'
                        paymentStatus='success'
                    />
                </Stack>
            </Stack>
        </LayoutSidebar>
    );
};

export default Orders;