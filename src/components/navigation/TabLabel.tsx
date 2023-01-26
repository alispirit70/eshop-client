import React, {ReactNode} from 'react';
import {Box, Tab as MuiTab, Tabs} from '@mui/material';
import {TabClasses} from "@mui/material/Tab/tabClasses";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type tabLabelType = {
    label: ReactNode,
    index: number,
    classes?: Partial<TabClasses>,
    disabled?: boolean,
    icon?: string | React.ReactElement,
    iconPosition?: 'bottom' | 'end' | 'start' | 'top',
    extraStyle?: SxProps<Theme>,
}
type propsLabelsType = {
    labels: tabLabelType[],
    prefixId?: string,
    onChangeValue: (vla : number) => void ,
    indicatorColor?: 'primary' | 'secondary'  ,
}
const TabLabel: React.FC<propsLabelsType> = ({
                                                 labels,
                                                 prefixId ,
                                                 onChangeValue ,
                                                 indicatorColor='primary'
                                             }) => {
    const [value, setValue] = React.useState(0);


        function a11yProps(label: tabLabelType) {
            return {
                id: `${prefixId}-tab-${label.index}`,
                'aria-controls': `${prefixId}-tabpanel-${label.index}`,
                ...(label.classes && {classes: label.classes}),
                ...(label.disabled && {disabled: label.disabled}),
                ...(label.icon && {icon: label.icon}),
                ...(label.iconPosition && {iconPosition: label.iconPosition}),
                ...(label.extraStyle && {sx: label.extraStyle}),
            };
        }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        onChangeValue(newValue);
    };

        return (
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs indicatorColor={indicatorColor} value={value} onChange={handleChange} aria-label="basic tabs example">
                {labels.map(label => <MuiTab key={label.index} label={label.label} {...a11yProps(label)}  />)}
                </Tabs>
            </Box>
        );
    }
;
export { type tabLabelType};

export default TabLabel;