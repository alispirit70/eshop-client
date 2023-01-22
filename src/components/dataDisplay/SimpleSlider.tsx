import React, {MouseEventHandler, ReactElement, ReactNode} from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css';

type imageType = {
    src: string
}
// interface itemType extends React.ReactNode{
//     key: string
// }
type OptionsFlags<Type> = {
    [dataId in keyof Type]: string|number;
};
type itemIdType = {

}
type propsType = {
    images?: imageType[],
    items?: ReactElement[],
    // items?: any,
    /*-------------slider------------------------*/
    accessibility?: boolean,
    arrows?: boolean,
    autoplaySpeed?: number,
    autoplay?: boolean,
    centerMode?: boolean,
    centerPadding?: string,
    dots?: boolean,
    draggable?: boolean,
    easing?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out',
    fade?: boolean,
    infinite?: boolean,
    initialSlide?: number,
    pauseOnDotsHover?: boolean,
    pauseOnHover?: boolean,
    // responsive?: ,
    rtl?: boolean,
    speed?: number,
    swipeToSlide?: boolean,
    swipe?: boolean,
    touchMove?: boolean,
    slidesToShow?: number,
    slidesToScroll?: number,
    vertical?: boolean,
    onClick?: (id: string|number) => void,
}
const SimpleSlider: React.FC<propsType> = ({
                                               images = [],
                                               items = [],
                                               accessibility = true,
                                               arrows = true,
                                               autoplaySpeed = 3000,
                                               autoplay = true,
                                               centerMode = false,
                                               centerPadding = '50px',
                                               dots = false,
                                               draggable = true,
                                               easing = 'linear',
                                               fade = false,
                                               infinite = true,
                                               initialSlide = 0,
                                               pauseOnDotsHover = false,
                                               pauseOnHover = false,
                                               // responsive ,
                                               rtl = true,
                                               speed = 500,
                                               swipeToSlide = false,
                                               swipe = true,
                                               slidesToShow = 1,
                                               slidesToScroll = 1,
                                               vertical = false,
                                               onClick=()=>{},
                                           }) => {
    const attributes = {}
    const settings = {
        accessibility: accessibility,
        arrows: arrows,
        autoplaySpeed: autoplaySpeed,
        autoplay: autoplay,
        centerMode: centerMode,
        centerPadding: centerPadding,
        dots: dots,
        draggable: draggable,
        easing: easing,
        fade: fade,
        infinite: infinite,
        initialSlide: initialSlide,
        pauseOnDotsHover: pauseOnDotsHover,
        pauseOnHover: pauseOnHover,
        rtl: rtl,
        speed: speed,
        swipeToSlide: swipeToSlide,
        swipe: swipe,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        vertical: vertical,
    };

    const handleOnClick = (event: React.MouseEvent<HTMLInputElement>, index: number|string): void => {
        onClick(index)
    }
    return (
        <div  className={` sliderSection ${arrows ? 'arrowVisible':''} `}>
            <div className={` simpleSld ${vertical ? 'verticalSlider' : ''} `}>
                <Slider {...settings}  >
                    {images.length > 0 && images?.map((image, index) => <div
                            onClick={(event: React.MouseEvent<HTMLInputElement>) => handleOnClick(event, index)}
                            key={index}
                            className='img-slide'>
                            <img src={image.src}/>
                        </div>
                    )}
                    {items.length > 0 && items?.map((item, index) => {
                        let imageId = item!.key !== null ? item.key : 0;
                        return <div
                            onClick={(event: React.MouseEvent<HTMLInputElement>) => handleOnClick(event, imageId)}
                            key={index}>{item}</div>
                    })}
                </Slider>
            </div>

        </div>


    );
};

export default SimpleSlider;