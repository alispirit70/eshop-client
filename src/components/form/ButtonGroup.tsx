import React, {ElementType, ReactNode} from 'react';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import {OverridableStringUnion} from "@mui/types";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {ButtonGroupClasses} from "@mui/material/ButtonGroup/buttonGroupClasses";
import {
    ButtonGroupPropsColorOverrides,
    ButtonGroupPropsSizeOverrides,
    ButtonGroupPropsVariantOverrides
} from "@mui/material/ButtonGroup/ButtonGroup";

type BGProps = {
    children: ReactNode,
    classes?: Partial<ButtonGroupClasses>,
    color?: OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
        ButtonGroupPropsColorOverrides
        >,
    component?: ElementType,
    disabled?: boolean,
    disableElevation?: boolean,
    disableFocusRipple?: boolean,
    fullWidth?: boolean,
    size?: OverridableStringUnion<'small' | 'medium' | 'large', ButtonGroupPropsSizeOverrides>,
    extraStyle?: SxProps<Theme>,
    variant?: OverridableStringUnion<
        'text' | 'outlined' | 'contained',
        ButtonGroupPropsVariantOverrides
        >,
}
const ButtonGroup:React.FC<BGProps> = ({
                                  children,
                                  classes,
                                  component,
                                  color,
                                  disabled,
                                  disableElevation,
                                  disableFocusRipple,
                                  fullWidth,
                                  size,
                                  extraStyle,
                                  variant	,
                              }) => {
    const attributes = {
        ...(classes && {classes: classes}),
        ...(color && {color: color}),
        ...(component && {component: component}),
        ...(disabled && {disabled: disabled}),
        ...(disableElevation && {disableElevation: disableElevation}),
        ...(disableFocusRipple && {disableFocusRipple: disableFocusRipple}),
        ...(fullWidth && {fullWidth: fullWidth}),
        ...(size && {size: size}),
        ...(extraStyle && {sx: extraStyle}),
        ...(variant && {variant: variant}),

    }
    return (
        <MuiButtonGroup {...attributes}>
            {children}
        </MuiButtonGroup>
    );
};

export default ButtonGroup;
