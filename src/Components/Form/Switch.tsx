import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {SwitchClasses} from "@mui/material/Switch/switchClasses";
import {FormControlLabel, FormGroup} from "@mui/material";

type SProps = {
    label: string,
    checked?: boolean,
    classes?: Partial<SwitchClasses>,
    color?: 	'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | string,
    defaultChecked?: boolean ,
    disabled?:	boolean ,
    disableRipple?:	boolean ,
    edge?:	'end'  | 'start' | false ,
    icon?: React.ReactNode,
    id?: string,
    inputRef?: React.Ref<HTMLInputElement>,
    onChange?:	()=>{},
    required?:	boolean,
    size?:	'medium' | 'small' | string,
    value?:	any
    extraClass?: SxProps<Theme>,
}
const Switch:React.FC<SProps> = ({
                                     label='',
                                     checked,
                                     classes,
                                     color,
                                     defaultChecked,
                                     disabled,
                                     disableRipple,
                                     edge,
                                     icon,
                                     id,
                                     inputRef,
                                     onChange,
                                     required,
                                     size,
                                     value,
                                     extraClass,
                                 }) => {

    const attributes = {
        ...(checked && {checked: checked}),
        ...(classes && {classes : classes}),
        ...(color && {color : color}),
        ...(defaultChecked && {defaultChecked : defaultChecked}),
        ...(disabled && {disabled : disabled}),
        ...(disableRipple && {disableRipple : disableRipple}),
        ...(edge && {edge : edge}),
        ...(icon && {icon : icon}),
        ...(id && {id : id}),
        ...(inputRef && {inputRef : inputRef}),
        ...(onChange && {onChange : onChange}),
        ...(required && {required : required}),
        ...(size && {size : size}),
        ...(value && {value : value}),
        ...(extraClass && {sx : extraClass}),
    }
    return (
    <FormGroup>
        <FormControlLabel control={<MuiSwitch  {...attributes}  />} label={label} />
    </FormGroup>
    );
};

export default Switch;
