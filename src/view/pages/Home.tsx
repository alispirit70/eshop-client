import React from 'react';
// import Header from "View/Pages/Section/Header/Heade";
// import Header from "View/Pages/Section/Header/Heade";

import Container from "components/layouts/Container";
import Header from "view/section/Header/Header";
import MainSlides from "components/sliders/MainSlides";
import MiniSlides from "components/sliders/MiniSlides";
import ProductSlider from "components/sliders/ProductSlider";
import Layout from "../../components/layouts/Layout";

type propsType = {}
const Home: React.FC<propsType> = () => {
    const attributes = {}
    return (
        <Layout>
            <MainSlides/>
            <MiniSlides/>
            <ProductSlider/>
        </Layout>
    );
};

export default Home;