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
    extraStyle?: SxProps<Theme>,
    className?: string
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
                                      extraStyle,
                                      className,
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
        ...(extraStyle && {sx: extraStyle}),
    }

    return (
        <MuiDivider {...attributes} className={className}>
            {children}
        </MuiDivider>
    );
};

export default Divider;
