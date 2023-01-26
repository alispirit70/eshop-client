import React from 'react';
import LayoutFull from "components/layouts/LayoutFull";
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
import Stack from "components/layouts/Stack";
import List from "components/list/List";
import ListItem from "components/list/ListItem";
import Divider from "components/dataDisplay/Divider";
import imgSmall1 from "assets/sample/43031.jpg"
import Img from "components/dataDisplay/Img";
import Button from "../../components/form/Button";
import LayoutSidebar from "components/layouts/LayoutSidebar";
import Sidebar from 'view/section/profile/Sidebar'
import CounterBox from "../section/profile/CounterBox";
import ProfileInfo from "../section/profile/ProfileInfo";
import OrderSummary from "../section/orders/OrderSummary";

type propsType = {}
const Profile: React.FC<propsType> = () => {
    return (
        <LayoutSidebar sidebar={<Sidebar/>}>
            <Stack>
                <Stack direction='column' className='border-2 border-gray-300 rounded-2xl px-5 py-6 mb-6'>
                    <Stack direction='row' justifyContent='space-between' className='pb-4'>
                        <div> اطلاعات کاربری :
                        </div>
                        <div>
                            <div className='bg-green-600 rounded-2xl p-4 text-gray-50'> ویرایش</div>
                        </div>
                    </Stack>
                    <Divider/>
                    <Row className='py-4'>
                        <Col col={{xs: 12, md: 4}} className='bg-inherit'>
                            <ProfileInfo title='نام و نام خانوادگی' text='علی مردانی'/>
                            <ProfileInfo title='شماره تماس ضروری' text='09109264000'/>
                        </Col>
                        <Col col={{xs: 12, md: 4}} className='bg-inherit'>
                            <ProfileInfo title='ایمیل' text='ali@yahoo.com'/>
                            <ProfileInfo title='تاریخ تولد' text=' '/>
                        </Col>
                        <Col col={{xs: 12, md: 4}} className='bg-inherit'>
                            <ProfileInfo title='شماره کارت' text=' '/>
                            <ProfileInfo title='شماره شبا ' text=' '/>
                        </Col>
                    </Row>
                </Stack>

                <Stack direction='column' spacing={3} className='border-2 border-gray-300 rounded-2xl px-5 py-6 mb-6'>
                    <h1> آخرین سفارشات</h1>
                    <div className='bg-gray-50 rounded-2xl p-4 '>
                        <OrderSummary
                            orderNumber='B38693527'
                            date='۱۴۰۱/۴/۲۷'
                            price='233000'
                            currency='tooman'
                            status='تحویل شده به مشتری'
                            paymentStatus='success'
                        />
                    </div>
                    <div className='bg-gray-50 rounded-2xl p-4 '>
                        <OrderSummary
                            orderNumber='B38693527'
                            date='۱۴۰۱/۴/۲۷'
                            price='233000'
                            currency='tooman'
                            status='تحویل شده به مشتری'
                            paymentStatus='onDelivery'
                        />
                    </div>

                            <Divider/>
                            <Stack alignItems='center'>
                                <a className='text-emerald-500 hover:text-emerald-700' href=""> مشاهده همه موارد</a>
                            </Stack>
                </Stack>

                <Stack direction='row' justifyContent='space-around' spacing={3}
                       className='border-2 border-gray-300 rounded-2xl px-5 py-6 mb-6'>
                    <CounterBox count={9} title='سفارش' text='چند سفارش داشته ام؟'/>
                    <CounterBox count={9} title='سفارش' text='چند سفارش داشته ام؟'/>
                    <CounterBox count={9} title='سفارش' text='چند سفارش داشته ام؟'/>
                </Stack>
            </Stack>

        </LayoutSidebar>
);
};

export default Profile;