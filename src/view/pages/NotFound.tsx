import React from 'react';
import LayoutFull from "../../components/layouts/LayoutFull";
type propsType = {
}
const NotFound:React.FC<propsType> = () => {
    const attributes = {}
    return (
        <LayoutFull>
            404 - Not found !
        </LayoutFull>
    );
};

export default NotFound;