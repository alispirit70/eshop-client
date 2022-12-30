import React from 'react';
// import Header from "View/Pages/Section/Header/Heade";
// import Header from "View/Pages/Section/Header/Heade";
import MainSlides from "Components/Sliders/MainSlides";
import MiniSlides from "Components/Sliders/MiniSlides";
import Container from "Components/Layouts/Container";
import ProductSlider from "Components/Sliders/ProductSlider";
import Header from "View/Section/Header/Header";

type propsType = {
}
const Home:React.FC<propsType> = () => {
const attributes = {}
    return (
        <>
            <Header />
            <Container>
                <MainSlides />
                <MiniSlides />
                <ProductSlider />
            </Container>
        </>

    );
};

export default Home;