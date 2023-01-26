import React from 'react';
import Input from "components/form/Input";
import Stack from "components/layouts/Stack";
import Select from "../../../components/form/Select";

type propsType = {}



const AddressAdd: React.FC<propsType> = () => {
    const attributes = {}

    const provinces = [
        {
            label: 'تهران',
            value: 'tehran'
        },
        {
            label: 'اصفهان',
            value: 'esfahan'
        }
    ]
    return (
        <Stack direction='column' spacing={2}>
            <h6>اطلاعات شخصی تحویل گیرنده   </h6>
            <Stack direction='row' alignItems='flex-start' className='mb-4' spacing={2}>
                <div >
                    <Input label='نام' name='firstname' />
                </div>
                <div >
                    <Input label='نام خانوادگی' name='lastname' />
                </div>
            </Stack>
            <h6>اطلاعات ارسال </h6>
            <Stack direction='row' alignItems='flex-start' className='mb-4' spacing={2}>
                <div >
                    <Input label='عنوان آدرس'  name='tite'/>
                </div>
                <div >
                    <Input label='موبایل' name='mobile' />
                </div>
            </Stack>
            <Stack direction='row' alignItems='flex-start' className='mb-4' spacing={2}>
                <div >
                    <Input label='تلفن ثابت'  name='phone'/>
                </div>
                <div >
                    <Select items={provinces} label='استان' name='province' placeholder='انتخاب کنید'  />
                </div>
            </Stack>
        </Stack>
    );
};

export default AddressAdd;