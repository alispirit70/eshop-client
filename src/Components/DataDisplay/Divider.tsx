import React, {ElementType, ReactNode} from 'react';
import MuiDivider from '@mui/material/Divider';
import {DividerClasses} from "@mui/material/Divider/dividerClasses";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";


type DProps = {
    absolute?:	boolean,
    flexItem?:	boolean,
    light?:	boolean,
    children?:	ReactNode,
    classes?: Partial<DividerClasses>,
    component?: ElementType,
    orientation?: 'horizontal' | 'vertical',
    textAlign?: 'center' | 'left' | 'right',
    variant?:	'fullWidth'| 'inset'| 'middle',
    extraClass?: SxProps<Theme>,

}
const Divider:React.FC<DProps> = ({
                                      children,
                                      absolute,
                                      flexItem,
                                      light,
                                      classes,
                                      component,
                                      orientation,
                                      textAlign,
                                      variant,
                                      extraClass,
                                  }) => {
    const attributes = {
        ...(absolute && { absolute : absolute}),
            ...(flexItem && { flexItem : flexItem}),
            ...(light && { light : light}),
            ...(classes && { classes : classes}),
            ...(component && { component : component}),
            ...(orientation && { orientation : orientation}),
            ...(textAlign && { textAlign : textAlign}),
            ...(variant && { variant : variant}),
        ...(extraClass && {sx: extraClass}),
    }

    return (
        <MuiDivider {...attributes}>
            {children}
        </MuiDivider>
    );
};

export default Divider;
