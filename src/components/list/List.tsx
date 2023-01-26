import React, {ElementType, ReactNode} from 'react';
import MuiList from '@mui/material/List';
import {ListClasses} from "@mui/material/List/listClasses";

import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type LProps = {
    children?: ReactNode,
    classes?: Partial<ListClasses>,
    dense?: boolean,/* true : vertical padding */
    extraStyle?: SxProps<Theme>
}
const List: React.FC<LProps> = ({
                                    children,
                                    classes,
                                    dense,
                                    extraStyle,
                                }) => {
        const attributes = {
            ...(children && {children: children}),
            ...(classes && {classes: classes}),
            ...(dense && {dense: dense}),
            ...(extraStyle && {sx: extraStyle}),
        }
        return (
            <MuiList {...attributes}>
                {children}
            </MuiList>
        );
    }
;

export default List;
