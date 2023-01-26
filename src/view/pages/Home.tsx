import React from 'react';
// import Header from "View/Pages/Section/Header/Heade";
// import Header from "View/Pages/Section/Header/Heade";

import Container from "components/layouts/Container";
import Header from "view/section/header/Header";
import MainSlides from "components/sliders/MainSlides";
import MiniSlides from "components/sliders/MiniSlides";
import ProductSlider from "components/sliders/ProductSlider";
import LayoutFull from "components/layouts/LayoutFull";

type propsType = {}
const Home: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <LayoutFull>
            <MainSlides/>
            <MiniSlides/>
            <ProductSlider/>
        </LayoutFull>
    );
};

export default Home;