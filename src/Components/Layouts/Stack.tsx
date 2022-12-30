import React, {ReactNode} from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import MuiStack from '@mui/material/Stack';

type propsType = {
    children: ReactNode,
    direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row',
    divider?: ReactNode,
    spacing?: number | string,
    extraClass?: SxProps<Theme>,

}
const Stack: React.FC<propsType> = ({
                                        children,
                                        direction,
                                        divider,
                                        spacing,
                                        extraClass,
                                    }) => {
        const attributes = {
            ...(direction && {direction: direction}),
            ...(divider && {divider: divider}),
            ...(spacing && {spacing: spacing}),
            ...(extraClass && {sx: extraClass}),
        }
        return (
            <MuiStack {...attributes} >
                {children}
            </MuiStack>
        );
    }
;

export default Stack;