import React, {ReactNode} from 'react';
import {Link} from "react-router-dom";

import Styles from "Components/DataDisplay/Sticky.module.css"

type propsType = {
    image: string,
    url?: string,
    alt?: string,
}
const Sticky: React.FC<propsType> = ({
                                         image,
                                         url,
                                         alt = '',
                                     }) => {
    const attributes = {}
    return (
        <div className={Styles.headerSticky}>
            {!!url && <Link to={url}><img src={image} alt={alt}/></Link>}
            {!url && <img src={image} alt={alt}/>}
        </div>
    );
};

export default Sticky;