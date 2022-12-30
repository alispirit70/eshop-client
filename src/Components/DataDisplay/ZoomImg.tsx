import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

type propsType = {
    img: string,
    height: number,
    width: number,
    zoomImg?: string ,
    zoomScale?: number,
    zoomType?: 'click' | 'hover',
    fadeDuration?: number,
    hideCloseButton?: boolean,

}
const ZoomImg:React.FC<propsType> = ({
                                         img,
                                         height,
                                         width,
                                         zoomImg,
                                         zoomScale=1,
                                         zoomType='hover',
                                         fadeDuration=150,
                                         hideCloseButton=false,
                                     }) => {
    const attributes = {}
    return (
        <div>
            <InnerImageZoom
                src={img}
                zoomSrc={zoomImg}
                height={height}
                width={width}
                zoomScale={zoomScale}
                zoomType={zoomType}
                fadeDuration={fadeDuration}
                hideCloseButton={hideCloseButton}
            />
        </div>
    );
};

export default ZoomImg;