import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

type TProps = {
    maxRows?:	number | string ,
    minRows?:	number | string ,
    defaultValue?: string
}
const Textarea: React.FC<TProps> = ({
                                        maxRows,
                                        minRows,
                                        defaultValue,
                                    }) => {
    const attributes = {
        ...(maxRows && {maxRows: maxRows}),
        ...(minRows && {minRows: minRows}),
        ...(defaultValue && {defaultValue: defaultValue}),
    }
    return (
        <TextareaAutosize
            {...attributes}
        />
    );
};

export default Textarea;
