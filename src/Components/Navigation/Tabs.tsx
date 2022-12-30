import React from 'react';
import Box from '@mui/material/Box';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TabLabel from "./TabLabel";
import {tabLabelType} from "Components/Navigation/TabLabel";
import TabPanel, {tabContentType} from 'Components/Navigation/TabPanel';

type propsType = {
    labels: tabLabelType[],
    content: tabContentType[],
    labelPrefix?: string,
    indicatorColor?: 'primary' | 'secondary'  ,
}

const Tabs: React.FC<propsType> = ({
                                       labels,
                                       content,
                                       labelPrefix = 'simple',
                                       indicatorColor,
                                   }) => {
    const [value, setValue] = React.useState(0);

    const onChangeValueHandler = (value: number) => {
        setValue(value);
    }

    const attributes = {
    }
    return (
        <>
            <TabLabel
                labels={labels}
                prefixId={labelPrefix}
                onChangeValue={onChangeValueHandler}
                indicatorColor={indicatorColor}
            />
            {content.map(cnt =>
                <TabPanel
                    key={cnt.index}
                    value={value}
                    index={cnt.index}
                    prefixId={labelPrefix}
                    content={cnt.content}
                />
            )}
        </>
    );
};

export default Tabs;