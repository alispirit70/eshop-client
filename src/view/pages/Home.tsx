import React from 'react';
// import Header from "View/Pages/Section/Header/Heade";
// import Header from "View/Pages/Section/Header/Heade";

import Container from "components/layouts/Container";
import Header from "view/section/header/Header";
import MainSlides from "components/sliders/MainSlides";
import MiniSlides from "components/sliders/MiniSlides";
import ProductSlider from "components/sliders/ProductSlider";
import LayoutFull from "components/layouts/LayoutFull";
import {fakeSlider} from "../../services/fakeSlider";

type propsType = {}
const Home: React.FC<propsType> = () => {
    const slider = fakeSlider();
    const attributes = {}
    return (
        <>
            <LayoutFull>
                <MainSlides/>
                <MiniSlides/>
                <ProductSlider items={slider}
                               maxWidth={330}
                               maxWidthUnit='px'
                />
            </LayoutFull>
        </>

    );
};

export default Home;