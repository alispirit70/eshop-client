import React from 'react';
import Stack from "components/layouts/Stack";
import List from "components/list/List";
import ListItem from "components/list/ListItem";
import Img from "../../../components/dataDisplay/Img";
import imageMan from 'assets/sample/gender-female.png'
import {splitCounter} from "utils/splitCounter";
import Divider from "../../../components/dataDisplay/Divider";
import {Link} from "react-router-dom";

type propsType = {}
const tempData = {
    firstname: 'علی',
    lastname: 'مردانی',
    validity: '1200000',
}


const Sidebar: React.FC<propsType> = () => {
    return (
        <>
            <Stack direction='column' className='mb-6'>
                <Stack direction='row' justifyContent='flex-start' alignItems='center' className='mb-8'>
                    <Img src={imageMan} width='60px' height='60px'
                         className='rounded-full ml-2 border border-emerald-300'/>
                    <span>
                      {tempData.firstname} {tempData.lastname}
                </span>
                </Stack>
                <div
                    className='bg-emerald-100 text-emerald-500 border-2 border-emerald-500 rounded-xl px-2 py-4 text-center'>
                    اعتبار کیف پول :
                    <span>&nbsp;&nbsp;{splitCounter(tempData.validity)}&nbsp;&nbsp;</span>
                    تومان
                </div>
            </Stack>
            <Divider />
            <Stack direction='column' className='mt-6'>
                <div>
                    <ul>
                        <li><Link to='/profile' >پروفایل</Link></li>
                        <li><Link to='/address' >آدرس ها</Link></li>
                        <li><Link to='/changePassword' >پسوورد</Link></li>
                        <li><Link to='/orders' >سفارش ها</Link></li>
                        <li><Link to='/wishList' >علاقه مندی ها</Link></li>
                    </ul>
                </div>
            </Stack>
        </>

    )
        ;
};

export default Sidebar;