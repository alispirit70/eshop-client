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
    extraStyle?: SxProps<Theme>
    text?: string,
    alignIcon?: 	'center' | 'flex-start',
    icon?: ReactNode  ,
    showSubList?: boolean,
    subListProps?: ReactNode,
    className?: string,
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
                                        extraStyle,
                                        text='',
                                        alignIcon,
                                        icon=false,
                                        showSubList = false,
                                        subListProps ,
                                        className,
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
        ...(extraStyle && {sx: extraStyle}),
        //------------------
        ...(alignIcon && {alignItems: alignIcon}),

    }


    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <ListItemButton className={className}  {...attributes} onClick={handleClick}  >
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
        </div>
    );
};

export default ListItem;
