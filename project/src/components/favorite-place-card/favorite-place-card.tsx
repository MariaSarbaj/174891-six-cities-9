import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';

import PlaceCardInfo from '../place-card-info/place-card-info';

import {Offer} from '../../types/offers';

type FavoritePlaceCardScreenProps = {
  offer: Offer
}

function FavoritePlaceCard(offer: FavoritePlaceCardScreenProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className="favorites__card place-card"
      onMouseOver={() => setIsActive(!isActive)}
    >
      <div className="place-card__mark">
        <span>{offer.offer.isPremium}</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to='#'>
          <img className="place-card__image" src={offer.offer.previewImage} width="150" height="110" alt="Place_image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <PlaceCardInfo offer={offer.offer}/>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
