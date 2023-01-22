import React, {ReactNode} from 'react';
import MUIAvatar from '@mui/material/Avatar';
import {AvatarClasses} from "@mui/material/Avatar/avatarClasses";
import {SxProps} from "@mui/system";
import {Theme} from "@mui/material/styles";

type AProps = {
    alt?:	string,
    children?:	ReactNode,
    classes?:	Partial<AvatarClasses>,
    imgProps?:	React.ImgHTMLAttributes<HTMLImageElement>,
    sizes?:	string,
    src?:	string,
    srcSet?:	string,
    variant?:	'circular'| 'rounded'| 'square',
    extraClass?: SxProps<Theme>
}

const Avatar:React.FC<AProps> = ({
                                     alt,
                                     children,
                                     classes,
                                     imgProps,
                                     sizes,
                                     src,
                                     srcSet,
                                     variant='circular',
                                     extraClass ,
                                 }) => {
    const attributes = {
    ...(alt && {alt:alt}),
    ...(children && {children:children}),
    ...(classes && {classes:classes}),
    ...(imgProps && {imgProps:imgProps}),
    ...(sizes && {sizes:sizes}),
    ...(src && {src:src}),
    ...(srcSet && {srcSet:srcSet}),
    ...(variant && {variant:variant}),
    ...(extraClass && {sx:extraClass}),
    }
        return (
        <MUIAvatar {...attributes}  />
    );
};

export default Avatar;
