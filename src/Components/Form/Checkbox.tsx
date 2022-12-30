import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import {CheckboxClasses} from "@mui/material/Checkbox/checkboxClasses";
import {OverridableStringUnion} from "@mui/types";
import {CheckboxPropsColorOverrides, CheckboxPropsSizeOverrides} from "@mui/material/Checkbox/Checkbox";
import {SwitchBaseProps} from "@mui/material/internal/SwitchBase";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type CHProps = {
    checked?: boolean,
    checkedIcon?: React.ReactNode,
    classes?: Partial<CheckboxClasses>,
    color?: OverridableStringUnion<'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default',
        CheckboxPropsColorOverrides>,
    defaultChecked?: boolean,
    disabled?: SwitchBaseProps['disabled'],
    disableRipple?: SwitchBaseProps['disableRipple'],
    icon?: React.ReactNode,
    id?: string,
    indeterminate?: boolean,
    indeterminateIcon?: React.ReactNode,
    inputProps?: SwitchBaseProps['inputProps'],
    inputRef?: React.Ref<HTMLInputElement>,
    onChange?: () => {},
    required?: boolean,
    size?: OverridableStringUnion<'small' | 'medium', CheckboxPropsSizeOverrides>,
    value?: any,
    extraClass?: SxProps<Theme>,
}
const Checkbox: React.FC<CHProps> = ({
                                         checked,
                                         checkedIcon,
                                         classes,
                                         color,
                                         defaultChecked,
                                         disabled,
                                         disableRipple,
                                         icon,
                                         id,
                                         indeterminate,
                                         indeterminateIcon,
                                         inputProps,
                                         inputRef,
                                         onChange,
                                         required,
                                         size,
                                         value,
                                         extraClass,
                                     }) => {
    const attributes = {
        ...(checked && {checked : checked}),
        ...(checkedIcon && {checkedIcon : checkedIcon}),
        ...(classes && {classes : classes}),
        ...(color && {color : color}),
        ...(defaultChecked && {defaultChecked : defaultChecked}),
        ...(disabled && {disabled : disabled}),
        ...(disableRipple && {disableRipple : disableRipple}),
        ...(icon && {icon : icon}),
        ...(id && {id : id}),
        ...(indeterminate && {indeterminate : indeterminate}),
        ...(indeterminateIcon && {indeterminateIcon : indeterminateIcon}),
        ...(inputProps && {inputProps : inputProps}),
        ...(inputRef && {inputRef : inputRef}),
        ...(onChange && {onChange : onChange}),
        ...(required && {required : required}),
        ...(size && {size : size}),
        ...(value && {value : value}),
        ...(extraClass && {extraClass : extraClass}),

    }
    return (
        <MuiCheckbox {...attributes} />
    );
};

export default Checkbox;
