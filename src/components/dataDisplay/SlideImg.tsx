import React from 'react';
import styles from './SlideImg.module.css';
type propsType = {
    src: string,
    link?: string,
    alt?: string,
    width: number | 'auto',
    height: number | 'auto',
    widthUnit?: 'px' | "%" | "vw" | "em",
    heightUnit?: 'px' | "%" | "vw" | "em",
    maxWidthHeight?: boolean ,
}
const SlideImg: React.FC<propsType> = ({
                                        src,
                                         link,
                                        alt,
                                        width,
                                        height,
                                        widthUnit = 'px',
                                        heightUnit = 'px',
                                        maxWidthHeight=false,
                                    }) => {
    const attributes = {}
    const style = {
        ...(width === 'auto' ? {width: 'auto'} : {width: width + widthUnit}),
        ...(height === 'auto' ? {height: 'auto'} : {height: height + heightUnit}),
        ...(maxWidthHeight && {maxWidth: '100%' , height:'auto'} ),
    }
    const image =  <img src={src} style={style} className={styles.slideImg} alt={alt}/>

    return (
        <>
            {!!link ? <a href={link} >{image}</a> : image }
        </>
    );
};

export default SlideImg;