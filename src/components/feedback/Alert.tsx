import React, {ReactNode} from 'react';
import {Alert as MuiAlert, AlertTitle, Collapse, IconButton, IconButtonProps, SvgIconProps} from '@mui/material';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';


type propsType = {
    title?: string,
    children: ReactNode,
    closeButton?: boolean,
    classes?: object,
    closeText?: string,
    color?: 'error' | 'info' | 'success' | 'warning',
    components?: {
        CloseButton?: React.ElementType;
        CloseIcon?: React.ElementType;
    },
    componentsProps?: { closeButton?: IconButtonProps, closeIcon?: SvgIconProps },
    icon?: ReactNode,
    iconMapping?: { error?: ReactNode, info?: ReactNode, success?: ReactNode, warning?: ReactNode },
    role?: string,
    severity?: 'error' | 'info' | 'success' | 'warning',
    slotProps?: {
        closeButton?: IconButtonProps;
        closeIcon?: SvgIconProps;
    },
    slots?: {
        closeButton?: React.ElementType;
        closeIcon?: React.ElementType;
    },
    onClose?: (event: React.SyntheticEvent) => void,
    variant?: 'filled' | 'outlined' | 'standard',
    extraStyle?: SxProps<Theme>
}
const Alert: React.FC<propsType> = ({
                                        children,
                                        title,
                                        closeButton = false,
                                        classes,
                                        closeText,
                                        color,
                                        components,
                                        componentsProps,
                                        icon,
                                        iconMapping,
                                        onClose,
                                        role,
                                        severity,
                                        slotProps,
                                        slots,
                                        variant,
                                        extraStyle,
                                    }) => {
    const attributes = {
        ...(classes && {classes: classes}),
        ...(closeText && {closeText: closeText}),
        ...(color && {color: color}),
        ...(components && {components: components}),
        ...(componentsProps && {componentsProps: componentsProps}),
        ...(icon && {icon: icon}),
        ...(iconMapping && {iconMapping: iconMapping}),
        ...(onClose && {onClose: onClose}),
        ...(role && {role: role}),
        ...(severity && {severity: severity}),
        ...(slotProps && {slotProps: slotProps}),
        ...(slots && {slots: slots}),
        ...(variant && {variant: variant}),
        ...(extraStyle && {sx: extraStyle}),
    }
    const [open, setOpen] = React.useState(true);
    const actionAlert = closeButton ?
       ( <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
                setOpen(false);
            }}
        >
            <CloseIcon fontSize="inherit"/>
        </IconButton>) : null;


    const alert = (
        <MuiAlert
            {...attributes}
            action={actionAlert}
        >
            {!!title && <AlertTitle >{title}</AlertTitle>}
            {children}
        </MuiAlert>)
    return (
        <>
            <Collapse in={open}>
                {alert}
            </Collapse>
        </>

    );
};

export default Alert;