
import React from 'react';

import GalleryItem from '../../components/gallery-item/gallery-item.component';
import './gallery.styles.scss';


const Gallery = ({data}) => {

  return (
    <section className="gallery">
      {
          data.imagenesGaleria.map(({id, ...otherProps}) => (
              <GalleryItem key={id} {...otherProps}></GalleryItem>
            )
          )
      }
    </section>
  );

};


export default Gallery;
