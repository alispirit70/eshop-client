import React, {ElementType, ReactNode} from 'react';
import MuiList from '@mui/material/List';
import {ListClasses} from "@mui/material/List/listClasses";

import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type LProps = {
    children?: ReactNode,
    classes?: Partial<ListClasses>,
    component?: ElementType,
    dense?: boolean,
    disablePadding?: boolean,
    subheader?: React.ReactNode,
    extraClass?: SxProps<Theme>
}
const List:React.FC<LProps> = ({
                                    children,
                                    classes,
                                    component,
                                    dense,
                                    disablePadding,
                                    subheader,
                                    extraClass,
                                }) => {
    const attributes = {
        ...(children && {children: children}),
        ...(classes && {classes: classes}),
        ...(component && {component: component}),
        ...(dense && {dense: dense}),
        ...(disablePadding && {disablePadding: disablePadding}),
        ...(subheader && {subheader: subheader}),
        ...(extraClass && {sx: extraClass}),
    }
    return (
        <MuiList {...attributes}>
            {children}
        </MuiList>
    );
}
    ;

export default List;
