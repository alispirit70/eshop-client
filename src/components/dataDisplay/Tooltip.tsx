import React, {ReactElement, ReactNode} from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';
// import MuiTooltip from '@mui/material/Tooltip';

import {TooltipClasses} from "@mui/material/Tooltip/tooltipClasses";
import {TransitionProps} from "@mui/material/transitions";
import {Theme} from "@mui/material/styles";
import {SxProps} from "@mui/system";

type TProps = {
    children: ReactElement<any, any>,
    arrow?: boolean,
    classes?: Partial<TooltipClasses>,
    enterDelay?: number,
    enterNextDelay?:	number,
    enterTouchDelay?:	number,
    id?:	string,
    leaveDelay?:	number,
    leaveTouchDelay?:	number,
    onClose?: ()=>{},
    onOpen?:  ()=>{},
    placement?:	'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top' ,
    title:	ReactNode,
    TransitionProps?: TransitionProps,
    extraStyle?:  SxProps<Theme>,

}

const Tooltip: React.FC<TProps> = ({
                                       children,
                                       arrow,
                                       classes,
                                       enterDelay,
                                       enterNextDelay,
                                       enterTouchDelay,
                                       id,
                                       leaveDelay,
                                       leaveTouchDelay,
                                       onClose,
                                       onOpen,
                                       placement,
                                       title,
                                       TransitionProps,
                                       extraStyle,
                                   }) => {
    const attribute = {
        ...(arrow && {arrow : arrow}),
        ...(classes && {classes : classes}),
        ...(enterDelay && {enterDelay : enterDelay}),
        ...(enterNextDelay && {enterNextDelay : enterNextDelay}),
        ...(enterTouchDelay && {enterTouchDelay : enterTouchDelay}),
        ...(id && {id : id}),
        ...(leaveDelay && {leaveDelay : leaveDelay}),
        ...(leaveTouchDelay && {leaveTouchDelay : leaveTouchDelay}),
        ...(onClose && {onClose : onClose}),
        ...(onOpen && {onOpen : onOpen}),
        ...(placement && {placement : placement}),
        ...(TransitionProps && {TransitionProps : TransitionProps}),
        ...(extraStyle && {sx : extraStyle}),
    }
    return (
        <MuiTooltip title={title}  {...attribute} >
            {children}
        </MuiTooltip>
    );
};

export default Tooltip;
