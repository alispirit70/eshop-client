import React, {useState} from 'react';
import Sidebar from "../section/profile/Sidebar";
import LayoutSidebar from "components/layouts/LayoutSidebar";
import Stack from "../../components/layouts/Stack";
import Divider from "../../components/dataDisplay/Divider";
import Modal from "../../components/layouts/Modal";
import styles from './Adress.module.css';
import AddressAdd from "../section/adress/AddressAdd";

type propsType = {}
const Address: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <LayoutSidebar sidebar={<Sidebar/>}>
            <Stack direction={"column"} className='border-2 border-gray-300 rounded-2xl px-5 py-6 mb-6'>
                <Stack className='mb-2' direction={'row'} justifyContent={'space-between'}>
                    <h3 className='text-xl'>لیست آدرس ها :</h3>
                    <div>افزودن</div>
                </Stack>
                <Divider/>

                <Modal
                    modalButtonTitle='click'
                    title='مدال'
                >
                    <AddressAdd/>
                </Modal>
                <Stack direction='column'>
                    <Stack direction='row'
                           className={` ${styles.addressRow} px-2 mt-4 border-2 border-gray-300 bg-gray-100`}>
                        <div className={styles.addressCols}>عنوان</div>
                        <div className={styles.addressCols}>نام تحویل گیرنده</div>
                        <div className={styles.addressCols}>آدرس</div>
                        <div className={styles.addressCols}>عملیات</div>
                    </Stack>
                    <Stack direction='row' className={` ${styles.addressRow} px-2 font-extrabold`}>
                        <div className={styles.addressCols}>خانه</div>
                        <div className={styles.addressCols}>مهمون ناخوانده</div>
                        <div className={styles.addressCols}>سازمان آب - ک هشتم شمالی پ12</div>
                        <div className={styles.addressCols}></div>
                    </Stack>
                    <Stack direction='row' className={` ${styles.addressRow} px-2 `}>
                        <div className={styles.addressCols}>همسایه</div>
                        <div className={styles.addressCols}>خودم</div>
                        <div className={styles.addressCols}>سازمان آب - ک هشتم شمالی پ13</div>
                        <div className={styles.addressCols}></div>
                    </Stack>
                </Stack>
            </Stack>
        </LayoutSidebar>
    );
};

export default Address;