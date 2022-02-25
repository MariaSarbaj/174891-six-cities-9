import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';

import PlaceCardInfo from '../place-card-info/place-card-info';

import {OfferCard} from '../../types/offer';

type PlaceCardScreenProps = {
  offer: OfferCard
}

function PlaceCard(offer: PlaceCardScreenProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => setIsActive(!isActive)}
    >
      <div className="place-card__mark">
        <span>{offer.offer.mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/#">
          <img className="place-card__image" src={offer.offer.src[0]} width="260" height="200" alt="Place_image" />
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfo offer={offer.offer}/>
      </div>
    </article>
  );
}

export default PlaceCard;
