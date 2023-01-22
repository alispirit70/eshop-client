import React, {ElementType, ReactNode} from 'react';
import MuiBadge from '@mui/material/Badge';
import {GridClasses} from "@mui/material/Grid/gridClasses";
import {BadgeClasses} from "@mui/material/Badge/badgeClasses";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type BProps = {
    children?: ReactNode,
    anchorOrigin?: {
        horizontal: 'left' | 'right',
        vertical: 'bottom' | 'top'
    },
    badgeContent?: ReactNode,
    classes?: Partial<BadgeClasses>,
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    components?: { Badge?: React.ElementType, Root?: React.ElementType },
    componentsProps?: {
        badge?: () => {} | object,
        root?: () => {} | object
    },
    invisible?: boolean,
    max?: number,
    overlap?: 'circular' | 'rectangular',
    showZero?: boolean,
    slotProps?: {
        badge?: () => {} | object,
        root?: () => {} | object
    },
    slots?: {
        root?: ElementType,
        badge?: ElementType,
    }
    variant?: 'dot' | 'standard' ,
    extraClass?: SxProps<Theme>,
}
const Badge: React.FC<BProps> = ({
                                     children,
                                     anchorOrigin,
                                     badgeContent,
                                     classes,
                                     color,
                                     components,
                                     componentsProps,
                                     invisible,
                                     max,
                                     overlap,
                                     showZero,
                                     slotProps,
                                     slots,
                                     variant='standard',
                                     extraClass,
                                 }) => {
    const attributes = {
        ...(children && {children: children}),
        ...(anchorOrigin && {anchorOrigin: anchorOrigin}),
        ...(badgeContent && {badgeContent: badgeContent}),
        ...(classes && {classes: classes}),
        ...(color && {color: color}),
        ...(components && {components: components}),
        ...(componentsProps && {componentsProps: componentsProps}),
        ...(invisible && {invisible: invisible}),
        ...(max && {max: max}),
        ...(overlap && {overlap: overlap}),
        ...(showZero && {showZero: showZero}),
        ...(slotProps && {slotProps: slotProps}),
        ...(slots && {slots: slots}),
        ...(variant && {variant: variant}),
        ...(extraClass && {sx: extraClass}),
    }
    return (
        <MuiBadge {...attributes}>
            {children}
        </MuiBadge>
    );
};

export default Badge;
