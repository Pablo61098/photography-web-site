import React from 'react';

import './banner.styles.scss';

const Banner  = ({image}) => {

    const styles = {
        imageStyle: {
            backgroundImage: `url(${image})`
        }
    };

    return (
        <div style={styles.imageStyle} className="full-image">
        </div>
    );

};

export default Banner;