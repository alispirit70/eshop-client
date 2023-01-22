import React, {ReactNode} from 'react';
import {ListItem as MuiListItem, ListItemText, ListItemButton, Collapse, ListItemIcon} from '@mui/material';
import {ListItemClasses} from "@mui/material/ListItem/listItemClasses";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";
import List  from "./List";
import ExpandLess from '@mui/icons-material/ExpandLess';
import {ExpandMore} from "@mui/icons-material";


type LProps = {
    children?: ReactNode,
    alignItems?: 'center' | 'flex-start',
    autoFocus?: boolean,
    classes?: Partial<ListItemClasses>,
    dense?: boolean,
    disableGutters?: boolean,
    disablePadding?: boolean,
    divider?: boolean,
    secondaryAction?: ReactNode,
    extraClass?: SxProps<Theme>
    text?: string,
    alignIcon?: 	'center' | 'flex-start',
    icon?: ReactNode  ,
    showSubList?: boolean,
    subListProps?: ReactNode,
}
const ListItem: React.FC<LProps> = ({
                                        children,
                                        alignItems,
                                        autoFocus,
                                        classes,
                                        dense,
                                        disableGutters,
                                        disablePadding,
                                        divider,
                                        secondaryAction,
                                        extraClass,
                                        text='',
                                        alignIcon,
                                        icon=false,
                                        showSubList = false,
                                        subListProps ,

                                    }) => {
    const [open, setOpen] = React.useState(true);

    const attributes = {
        ...(children && {children: children}),
        ...(alignItems && {alignItems: alignItems}),
        ...(autoFocus && {autoFocus: autoFocus}),
        ...(classes && {classes: classes}),
        ...(dense && {dense: dense}),
        ...(disableGutters && {disableGutters: disableGutters}),
        ...(disablePadding && {disablePadding: disablePadding}),
        ...(divider && {divider: divider}),
        ...(secondaryAction && {secondaryAction: secondaryAction}),
        ...(extraClass && {sx: extraClass}),
        //------------------
        ...(alignIcon && {alignItems: alignIcon}),

    }


    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <React.Fragment>
            <ListItemButton  {...attributes} onClick={handleClick}  >
                {!!icon && <ListItemIcon  >{icon}</ListItemIcon>}
                {!!text.length && <ListItemText>{text}</ListItemText>}
                { showSubList ?  (open   ? <ExpandLess /> : <ExpandMore /> ): ''   }
                {children}
            </ListItemButton>
            {!!showSubList &&
                <Collapse sx={{ pl: 2 }} in={open} timeout="auto" unmountOnExit>
                    {subListProps}
                </Collapse>
            }
        </React.Fragment>
    );
};

export default ListItem;
