
import React from 'react';

import './gallery-item.styles.scss';

const GalleryItem = ({...otherProps}) => {

    // console.log(...otherProps);
    const {image, height} = otherProps;
    // console.log(id);
    // console.log(image);

    return (
        <div className={`item h4 v${height}`}>
            <img src={`${image}`} alt="gallery-image"/>
        </div>
    );

};

export default GalleryItem;
