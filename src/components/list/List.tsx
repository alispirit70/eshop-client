import React, {ElementType, ReactNode} from 'react';
import MuiList from '@mui/material/List';
import {ListClasses} from "@mui/material/List/listClasses";

import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type LProps = {
    children?: ReactNode,
    classes?: Partial<ListClasses>,
    dense?: boolean,/* true : vertical padding */
    extraClass?: SxProps<Theme>
}
const List: React.FC<LProps> = ({
                                    children,
                                    classes,
                                    dense,
                                    extraClass,
                                }) => {
        const attributes = {
            ...(children && {children: children}),
            ...(classes && {classes: classes}),
            ...(dense && {dense: dense}),
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
