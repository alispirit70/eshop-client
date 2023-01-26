import React from 'react';
import Stack from "../../../components/layouts/Stack";
type propsType = {
    title?: string,
    text?: string
}
const ProfileInfo:React.FC<propsType> = ({
                                             title,
                                             text,
                                         }) => {
const attributes = {}
    return (
        <Stack direction='column' className='mb-6' spacing={1}>
            <span className='text-gray-400'> {title} : </span>
            <span> {text} </span>
        </Stack>
    );
};

export default ProfileInfo;