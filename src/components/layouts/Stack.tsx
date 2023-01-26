import React, {ReactNode} from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import MuiStack from '@mui/material/Stack';

type propsType = {
    children: ReactNode,
    direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row',
    alignItems?: 'flex-start' |  'center' |  'flex-end' |  'stretch' |  'baseline',
    justifyContent?:  'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' ,
    divider?: ReactNode,
    spacing?: number | string,
    extraStyle?: SxProps<Theme>,
    className?: string
}
const Stack: React.FC<propsType> = ({
                                        children,
                                        direction,
                                        divider,
                                        spacing,
                                        extraStyle,
                                        alignItems,
                                        justifyContent,
                                        className
                                    }) => {
        const attributes = {
            ...(direction && {direction: direction}),
            ...(divider && {divider: divider}),
            ...(spacing && {spacing: spacing}),
            ...(alignItems && {alignItems: alignItems}),
            ...(justifyContent && {justifyContent: justifyContent}),
            ...(extraStyle && {sx: extraStyle}),
        }
        return (
            <MuiStack {...attributes} className={className} >
                {children}
            </MuiStack>
        );
    }
;

export default Stack;