import React, {ReactNode, ElementType, ButtonHTMLAttributes} from 'react';
import MuiButton from '@mui/material/Button';
import {ButtonClasses} from "@mui/material/Button/buttonClasses";
import {OverridableStringUnion} from "@mui/types";
import {
    ButtonPropsColorOverrides,
    ButtonPropsSizeOverrides,
    ButtonPropsVariantOverrides
} from "@mui/material/Button/Button";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

interface  BProps extends React.ComponentPropsWithoutRef<"button"> {
    children: ReactNode,
    classes?: Partial<ButtonClasses>,
    color?: OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
        ButtonPropsColorOverrides
        >,
    component?: ElementType,
    disabled?: boolean,
    disableElevation?: boolean,
    disableFocusRipple?: boolean,
    endIcon?: React.ReactNode,
    fullWidth?: boolean,
    href?: string,
    size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides>,
    startIcon?: React.ReactNode,
    extraClass?: SxProps<Theme>,
    variant?: OverridableStringUnion<
        'text' | 'outlined' | 'contained',
        ButtonPropsVariantOverrides
        >,
    onClick?: () => void;
}

const Button:React.FC<BProps> = ({
                                     children,
                                     classes,component,
                                     color,
                                     disabled,
                                     disableElevation,
                                     disableFocusRipple,
                                     endIcon,
                                     fullWidth,
                                     href,
                                     size,
                                     startIcon,
                                     extraClass,
                                     variant	,
                                     onClick,
                                 }) => {
    const attributes = {
        ...(classes && {classes: classes}),
        ...(color && {color: color}),
        ...(disabled && {disabled: disabled}),
        ...(disableElevation && {disableElevation: disableElevation}),
        ...(disableFocusRipple && {disableFocusRipple: disableFocusRipple}),
        ...(endIcon && {endIcon: endIcon}),
        ...(fullWidth && {fullWidth: fullWidth}),
        ...(href && {href: href}),
        ...(size && {size: size}),
        ...(startIcon && {startIcon: startIcon}),
        ...(extraClass && {sx: extraClass}),
        ...(variant && {variant: variant}),
        ...(onClick && {onClick: onClick}),
    }
    return (
        <MuiButton   {...attributes}>
            {children}
        </MuiButton>
    );
};

export default Button;
