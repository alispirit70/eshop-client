import React, {ReactElement, ReactNode} from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Button from 'Components/Form/Button';
import MuiSnackbar, {SnackbarClasses} from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {SnackbarContentProps} from "@mui/material";
import AlertMain from 'Components/Feedback/Alert'

type propsType = {
    severity?: 'error' | 'info' | 'success' | 'warning',
    ButtonText: string,
    ButtonVariant?: 'outlined' | 'contained',
    action?: ReactNode,
    anchorOrigin?: {
        horizontal: 'center' | 'left' | 'right',
        vertical: 'bottom' | 'top'
    },
    autoHideDuration?: number,
    children?: ReactNode,
    classes?: Partial<SnackbarClasses>,
    ContentProps?: Partial<SnackbarContentProps>,
    disableWindowBlurListener?: boolean
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbar: React.FC<propsType> = ({
                                           severity,
                                           ButtonText = '',
                                           ButtonVariant = 'contained',
                                           action,
                                           anchorOrigin,
                                           autoHideDuration,
                                           children,
                                           classes,
                                           ContentProps,
                                           disableWindowBlurListener,
                                       }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const attribute = {
        ...(action && {action: action}),
        ...(anchorOrigin && {anchorOrigin: anchorOrigin}),
        ...(autoHideDuration && {autoHideDuration: autoHideDuration}),
    }
    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Button variant={ButtonVariant} onClick={handleClick}>
                {ButtonText}
            </Button>
            <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose} {...attribute} >
                <Alert onClose={handleClose} severity={severity} sx={{width: '100%'}} >
                    {children}
                </Alert>
            </MuiSnackbar>
        </Stack>
    );
};

export default Snackbar;