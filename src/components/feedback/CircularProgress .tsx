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
    extraClass?:  SxProps<Theme>,
}

const CircularProgress: React.FC<propsType> = ({
                                                   classes,
                                                   color,
                                                   disableShrink,
                                                   size,
                                                   thickness,
                                                   value,
                                                   variant,
                                                   extraClass,
                                               }) => {
    const attributes = {
        ...(classes && {classes: classes}),
        ...(color && {color: color}),
        ...(disableShrink && {disableShrink: disableShrink}),
        ...(size && {size: size}),
        ...(thickness && {thickness: thickness}),
        ...(value && {value: value}),
        ...(variant && {variant: variant}),
        ...(extraClass && {sx: extraClass}),
    }
    return (
        <MuiCircularProgress {...attributes} />
    );
}
    ;

    export default CircularProgress;