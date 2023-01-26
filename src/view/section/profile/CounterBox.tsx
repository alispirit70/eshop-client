import React from 'react';
import Stack from "components/layouts/Stack";
type propsType = {
    count?: number ,
    title?: string,
    text?: string
}
const CounterBox:React.FC<propsType> = ({
                                            count,
                                            title='',
                                            text,
                                        }) => {
    return (
        <div className='border border-gray-300 rounded-2xl py-6 px-8 text-center'>
            <Stack direction='column' alignItems='center' justifyContent='center'
                   className='rounded-full w-32 h-32 bg-emerald-100 text-emerald-600 font-bold text-xl mb-2'>
                <div>{!!count? count : ' ' }</div>
                <div>{title}</div>
            </Stack>
            <h6>{text}</h6>
        </div>
    );
};

export default CounterBox;