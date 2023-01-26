import React from 'react';
import {CircularProgress as MuiCircularProgress} from '@mui/material';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {CircularProgressClasses} from "@mui/material/CircularProgress/circularProgressClasses";

type propsType = {
    classes?: Partial<CircularProgressClasses>,
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    disableShrink?: boolean,
    size?: number | string,
    thickness?: number,
    value?: number,
    variant?: 'determinate' | 'indeterminate',
    extraStyle?:  SxProps<Theme>,
}

const CircularProgress: React.FC<propsType> = ({
                                                   classes,
                                                   color,
                                                   disableShrink,
                                                   size,
                                                   thickness,
                                                   value,
                                                   variant,
                                                   extraStyle,
                                               }) => {
    const attributes = {
        ...(classes && {classes: classes}),
        ...(color && {color: color}),
        ...(disableShrink && {disableShrink: disableShrink}),
        ...(size && {size: size}),
        ...(thickness && {thickness: thickness}),
        ...(value && {value: value}),
        ...(variant && {variant: variant}),
        ...(extraStyle && {sx: extraStyle}),
    }
    return (
        <MuiCircularProgress {...attributes} />
    );
}
    ;

    export default CircularProgress;