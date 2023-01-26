import React from 'react';
import {FormControl, InputLabel, OutlinedInput} from "@mui/material";
import {Input as MuiInput} from '@mui/material';

import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import styles from './input.module.css'
import {InputClasses} from "@mui/material/Input/inputClasses";

type IProps = {
    label: React.ReactNode,
    autoFocus?: boolean,
    classes?: Partial<InputClasses>,
    defaultValue?: any,
    disabled?: boolean,
    error?: boolean,
    id?: string,
    inputRef?: React.Ref<HTMLInputElement>,
    margin?: 'dense' | 'none' | 'normal',
    name?: string,
    onChange?: () => void,
    placeholder?: string,
    required?: boolean,
    type?: string,
    value?: any,

    extraStyle?: SxProps<Theme>,

    //================= form control Props
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' ,
    variant?: 'underline' | 'standard',
    fullWidth?: boolean,
    size?: 'medium' | 'small' ,
    className?: string,
    labelClassName?: string,

}

const Input: React.FC<IProps> = ({
                                     autoFocus,
                                     classes,
                                     defaultValue,
                                     disabled,
                                     error,
                                     id,
                                     inputRef,
                                     label,
                                     margin,
                                     name,
                                     onChange,
                                     placeholder='',
                                     required,
                                     extraStyle,
                                     type,
                                     value,
                                     color='primary',
                                     variant='standard',
                                     fullWidth=true,
                                     size='small',
                                     className='',
                                     labelClassName=''
                                 }) => {
    const attributes = {
        ...(autoFocus && {autoFocus: autoFocus}),
        ...(classes && {classes: classes}),
        ...(defaultValue && {defaultValue: defaultValue}),
        ...(disabled && {disabled: disabled}),
        ...(error && {error: error}),
        ...(id && {id: id}),
        ...(inputRef && {inputRef: inputRef}),
        ...(label && {label: label}),
        ...(margin && {margin: margin}),
        ...(name && {name: name}),
        ...(onChange && {onChange: onChange}),
        ...(required && {required: required}),
        ...(extraStyle && {sx: extraStyle}),
        ...(type && {type: type}),
        ...(value && {value: value}),
        ...({fullWidth:true})
    }
    return (
        <>
            <FormControl
                color={color}
                fullWidth={fullWidth}
                size={size}
                dir='rtl'
            >
                <InputLabel htmlFor="standard-adornment-amount" className={labelClassName}>{label}</InputLabel>
                {variant==='standard' && <OutlinedInput {...attributes} placeholder={placeholder} className={className}/>}
                {variant==='underline' && <MuiInput {...attributes} placeholder={placeholder} className={className} />}
            </FormControl>
        </>
    );
};

export default Input;
