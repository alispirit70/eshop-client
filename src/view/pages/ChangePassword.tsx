import React from 'react';
import Sidebar from "../section/profile/Sidebar";
import LayoutSidebar from "../../components/layouts/LayoutSidebar";
import Stack from "../../components/layouts/Stack";
import Input from "../../components/form/Input";
import Row from "../../components/layouts/Row";
import Col from "../../components/layouts/Col";
import Button from "../../components/form/Button";
type propsType = {
}
const ChangePassword:React.FC<propsType> = () => {
const attributes = {}
    return (
        <LayoutSidebar sidebar={<Sidebar/>}>
            <Row>
                <Col col={{xs:12,sm:10,md:8,lg:6}} >
                    <Stack direction='column' spacing={5} >
                        <h3 className='font-bold'> تغییر کلمهم عبور</h3>
                        <p className='text-gray-600 mt-3 mb-6'>جهت افزایش امنیت حساب کاربری خود، یک کلمه عبور وارد نمایید.</p>
                        <Input label='کلمه عبور فعلی' type='password' variant='standard' required={true}  labelClassName='' fullWidth={false} placeholder=''/>
                        <Input label='کلمه عبور جدید' type='password' variant='standard' required={true}  labelClassName='' fullWidth={false} placeholder='حداقل 6 کاراکتر  '/>
                        <Input label='تکرار کلمه عبور جدید' type='password' variant='standard' required={true}  labelClassName='' fullWidth={false} placeholder='تکرار کلمه عبور '/>
                        <Button type='submit' fullWidth={true} variant='contained' color='success' > تغییر کلمه عبور</Button>
                    </Stack>
                </Col>
            </Row>

        </LayoutSidebar>
    );
};

export default ChangePassword;