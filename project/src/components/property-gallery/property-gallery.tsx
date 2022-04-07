import React from 'react';
import { uniqueId } from '../../services/utils';

function PropertyGallery(props: { images: string[] }): JSX.Element {
  const { images } = props;
  return (
    <div className="property__gallery-container container" data-testid="room-gallery">
      <div className="property__gallery">
        {images.map((image) => (
          <div key={uniqueId('gallery')} className="property__image-wrapper">
            <img className="property__image" src={image} alt="studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyGallery;
