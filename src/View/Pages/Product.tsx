import React from 'react';
import ProductSummary from 'Components/Product/ProductSummary'
import ProductDetail from "Components/Product/ProductDetail";
type propsType = {
}
const Product:React.FC<propsType> = () => {
const attributes = {}
    return (
        <div>
            <ProductSummary />
            <ProductDetail />
{/*<ZoomImg img={small1} height={300} width={600} zoomImg={big1} />*/}
        </div>
    );
};

export default Product;