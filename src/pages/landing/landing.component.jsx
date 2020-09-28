import React from 'react';

import './landing.styles.scss';

import Banner from '../../components/banner/banner.component';
import Gallery from '../../components/gallery/gallery.component';
import {data} from './landing.data';

const LandingPage = () => {

    // console.log(data);

    return (
        <div className='landing-page'>
            <Banner image='./images/fullImage.jpg'></Banner>
            <Gallery data={data}></Gallery>
        </div>
    );

};

export default LandingPage;