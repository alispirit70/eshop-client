import React, {useEffect, useState} from 'react';
import ZoomImg from "../dataDisplay/ZoomImg";
import small1 from "../../assets/sample/unsplash-10.jpg";
import big1 from "../../assets/sample/unsplash-10-large.jpg";
import SimpleSlider from "../dataDisplay/SimpleSlider";
import styles from './GallerySlider.module.css';

import Stack from "../layouts/Stack";

type galleryType = {
    id: number | string,
    src: string,
}
type propsType = {
    height: number,
    width: number,
    sliderWidth?: number,
    sliderHeight?: number,
    images: galleryType[]
}
const GallerySlider: React.FC<propsType> = ({
                                                height,
                                                width,
                                                sliderWidth = 50,
                                                sliderHeight = 50,
                                                images,
                                            }) => {
    console.log(images)
    const [imageId,setImageId] = useState<number|string>(images[0].id);
    const [smallSrc,setSmallSrc] = useState<string>(images[0].src);
    const [bigSrc,setBigSrc] = useState<string>(images[0].src);

    // const attributes = {}
    const imagesSlider = images.map(img => <div key={img.id}
                                                style={{
                                                    height: sliderHeight,
                                                    width: sliderWidth,
                                                    textAlign: "center",
                                                    border: '1px solid #e1e1e1',
                                                    borderRadius: '4px',
                                                }}><img src={img.src}/>
    </div>)

    const onClickHandler = (id:string|number): void =>{
        setImageId(id)
    }
    useEffect(()=>{
       let image =  images.find(image => image.id.toString() === imageId.toString());
        setSmallSrc(image!.src);
        setBigSrc(image!.src);

    },[imageId]);
    return (
        <div style={{height: height, width: width}}>
            <Stack direction='column'>
                <div className={styles.galleryImg}>
                    <ZoomImg
                        img={smallSrc}
                        height={300}
                        width={500}
                        zoomImg={bigSrc}
                        hideCloseButton={false}
                        zoomScale={2}
                    />
                </div>
                <div className={styles.galleryThumb} style={{height: sliderHeight, width: sliderWidth * 4}}>
                    <SimpleSlider
                        items={imagesSlider}
                        autoplay={false}
                        slidesToShow={3}
                        dots={false}
                        infinite={false}
                        rtl={false}
                        onClick={onClickHandler}
                    />
                </div>
            </Stack>


        </div>
    );
};

export default GallerySlider;