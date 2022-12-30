import React, {ReactNode} from 'react';
import {Box, Grid} from "@mui/material";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
type propsType = {
    children: ReactNode,
    extraClass?: SxProps<Theme>,
}
const Row:React.FC<propsType> = ({
                                     children,
                                     extraClass,
}) => {
const attributes = {
    ...(extraClass && {sx: extraClass}),
}
    return (
        <Box sx={{ flexGrow: 1 }} {...attributes}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Box>
    );
};

export default Row;