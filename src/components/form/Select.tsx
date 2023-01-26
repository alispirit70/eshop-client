import * as React from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect, {SelectChangeEvent} from '@mui/material/Select';
import RadioGROUPO from "./RadioGroup";
import {SelectClasses} from "@mui/material/Select/selectClasses";
import {InputProps} from "@mui/material/Input";
import {SxProps} from "@mui/system";
import {Box, Chip, InputLabel} from "@mui/material";
import {useEffect} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

type itemType = {
    label: string | number,
    value: string | number,
}
type SProps = {
    items: itemType[],
    name: string,
    autoWidth?: boolean,
    classes?: Partial<SelectClasses>;
    defaultOpen?: boolean;
    defaultValue?: any;
    displayEmpty?: boolean;
    IconComponent?: React.ElementType;
    id?: string;
    input?: React.ReactElement<any, any>;
    inputProps?: InputProps['inputProps'];
    label: React.ReactNode;
    labelId?: string;
    multiple?: boolean;
    native?: boolean;
    onChange?: () => {},
    onClose?: () => {},
    onOpen?: () => {},
    open?: boolean;
    SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
    extraStyle?: SxProps<Theme>,
    value?: any,
    variant?: 'standard' | 'outlined' | 'filled',
    itemVariant?: 'standard' | 'badge',
    placeholder?: string | false,

}


const inputPropsDefault = {'aria-label': 'Without label'}
const Select: React.FC<SProps> = ({
                                      items = [],
                                      name,
                                      autoWidth,
                                      classes,
                                      defaultOpen,
                                      defaultValue,
                                      displayEmpty,
                                      IconComponent,
                                      id,
                                      input,
                                      inputProps = inputPropsDefault,
                                      label,
                                      labelId = '',
                                      multiple = false,
                                      native,
                                      onChange,
                                      onClose,
                                      onOpen,
                                      open,
                                      SelectDisplayProps,
                                      extraStyle,
                                      value,
                                      variant,
                                      itemVariant = 'standard',
                                      placeholder = false
                                  }) => {
    const attributes = {
        ...(autoWidth && {autoWidth: autoWidth}),
        ...(classes && {classes: classes}),
        ...(defaultOpen && {defaultOpen: defaultOpen}),
        ...(displayEmpty && {displayEmpty: displayEmpty}),
        ...(IconComponent && {IconComponent: IconComponent}),
        ...(id && {id: IconComponent}),
        ...(input && {input: input}),
        ...(inputProps && {inputProps: inputProps}),
        ...(multiple && {multiple: multiple}),
        ...(native && {native: native}),
        ...(onClose && {onClose: onClose}),
        ...(onOpen && {onOpen: onOpen}),
        ...(open && {open: open}),
        ...(extraStyle && {sx: extraStyle}),
        ...(value && {value: value}),
        ...(variant && {variant: variant}),
    }

    const [selected, setSelected] = React.useState<(any)[]>([]);

    useEffect(() => {
        if (multiple) {
            setSelected(Array.isArray(value) ? value : []);
        } else {
            setSelected(Array.isArray(value) ? '' : value);
        }

    }, []);
    useEffect(() => {
        // console.log(selected)
        // const selectedItems = items.filter(item => selected.includes(item.value) );
        // setSelectedLabel(selectedItems.map(item => item.label));
    }, [selected]);


    const handleChangeDefault = (event: SelectChangeEvent<typeof selected>) => {
        const value = event.target.value;

        setSelected(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const handelRenderValue = (selected: (string | number)[]) => {
        const selectedItems = items.filter(item => selected.includes(item.value));
        if (itemVariant === 'badge') {
            const selectedrender = <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                {selectedItems.map((item) => (
                    <Chip key={item.value} label={item.label}/>
                ))}
            </Box>
            return selectedrender;
        }
        // itemVariant == standard
        return selectedItems.map((item) => item.label).join(", ");
    }
    return (
        <div>
            <FormControl sx={{m: 1, width: 300, mt: 3}}>
                <InputLabel id={labelId}>{label}</InputLabel>
                <MuiSelect
                    {...attributes}
                    onChange={handleChangeDefault}
                    value={selected}
                    renderValue={multiple ? handelRenderValue : undefined}
                    name={name}
                >
                    <MenuItem
                        disabled
                        value=""
                    >
                        {placeholder && <em>{placeholder}</em>}
                    </MenuItem>
                    {items.map((item, key) => {
                            return (
                                <MenuItem disabled={false} key={item.label} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            )
                        }
                    )}
                </MuiSelect>
            </FormControl>
        </div>
    )
        ;
}
export type {itemType};
export default Select;
