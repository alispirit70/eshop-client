import React from 'react';
import ProductSummary from 'components/product/ProductSummary'
import ProductDetail from "components/product/ProductDetail";
import LayoutFull from "../../components/layouts/LayoutFull";
type propsType = {
}
const Product:React.FC<propsType> = () => {
const attributes = {}
    return (
        <LayoutFull>
            <ProductSummary />
            <ProductDetail />
{/*<ZoomImg img={small1} height={300} width={600} zoomImg={big1} />*/}
        </LayoutFull>
    );
};

export default Product;