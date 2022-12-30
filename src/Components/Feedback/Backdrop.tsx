import React, {ReactNode} from 'react';
import {Backdrop as MuiBackdrop, CircularProgress} from '@mui/material';

type propsType = {
    open:	boolean,
    onClose: ()=> void ,
    children?:	ReactNode,
}
const Backdrop:React.FC<propsType> = ({
                                          open,
                                          onClose
                                      }) => {
    const onClickHandler=()=>{
        onClose();
    }
const attributes = {}
    return (
        <MuiBackdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={onClickHandler}
        >
            <CircularProgress color="inherit" />
        </MuiBackdrop>
    );
};

export default Backdrop;