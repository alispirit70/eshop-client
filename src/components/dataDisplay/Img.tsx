import React from 'react';
type propsType = {
    src: string,
    rounded?: boolean,
    width?: string,
    height?: string,
    className?: string,
    imageClassName?: string,
    alt?: string,
}
const Img:React.FC<propsType> = ({
                                     src,
                                     rounded,
                                     width,
                                     height,
                                     className,
                                     alt,
                                     imageClassName
                                 }) => {
const style = {
    ...(width && {width: width}),
    ...(height && {height: height}),
}
    return (
        <div className={` ${rounded ? 'rounded-xl': ''} overflow-x-hidden ${className}`}>
            <img className={imageClassName} src={src} alt={alt} style={style}/>
        </div>
    );
};

export default Img;