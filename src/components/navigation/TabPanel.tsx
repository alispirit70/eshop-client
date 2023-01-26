import React, {ReactNode} from 'react';
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

type propsType = {
    index: number,
    content: ReactNode,
    prefixId?: string,
    value?: number,
    // classes	object
    // extraStyle?: SxProps<Theme>,
}


const TabPanel: React.FC<propsType> = ({
                                           index,
                                           content,
                                           prefixId,
                                           value
                                       }) => {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`${prefixId}-tabpanel-${index}`}
            aria-labelledby={`${prefixId}-tab-${index}`}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{content}</Typography>
                </Box>
            )}
        </div>
    );
};
export { type propsType as tabContentType}
export default TabPanel;