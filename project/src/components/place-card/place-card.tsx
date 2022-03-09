import React from 'react';
import {Link} from 'react-router-dom';

import PlaceCardInfo from '../place-card-info/place-card-info';

import {OfferCard} from '../../types/offer';

type PlaceCardScreenProps = {
  offer: OfferCard,
  mouseOverHandler: (x: string) => void
}

function PlaceCard({offer, mouseOverHandler}: PlaceCardScreenProps): JSX.Element {

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        mouseOverHandler(offer.title);
      }}
    >
      <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/#">
          <img className="place-card__image" src={offer.src[0]} width="260" height="200" alt="Place_image" />
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfo offer={offer}/>
      </div>
    </article>
  );
}

export default PlaceCard;
