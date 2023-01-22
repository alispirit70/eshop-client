import React, {ReactNode} from 'react';
import RadioGroup, {useRadioGroup} from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import FormControlLabel, {
    FormControlLabelProps,
} from '@mui/material/FormControlLabel';

type RadioItemTypes = {
    label: string,
    value: string | number
}
type RGProps = {
    defaultValue?: any,
    name?: string,
    onChange?: () => {},
    value?: any,
    row?: boolean,
    items: RadioItemTypes[]
}
const RadioGROUPO: React.FC<RGProps> = ({
                                            defaultValue,
                                            name,
                                            onChange,
                                            value,
                                            row,
                                            items
                                        }) => {
    const attributes = {
        ...(onChange && {onChange: onChange}),
        ...(value && {value: value}),
        ...(row && {row: row}),
    }
    return (
        <RadioGroup name={name} defaultValue={defaultValue} {...attributes}>
            {items.map(item => <FormControlLabel key={item.value} value={item.value} label={item.label}
                                                 control={<Radio/>}/>)}
        </RadioGroup>
    );
};

export default RadioGROUPO;
