import React from 'react';
import {Link} from 'react-router-dom';

import PlaceCardInfo from '../place-card-info/place-card-info';

import {OfferCard} from '../../types/offer';

type PlaceCardScreenProps = {
  offer: OfferCard,
  mouseOverHandler: (x: string) => void,
  additionalClassForCard: string,
  additionalClassForImage: string,
}

function PlaceCard({offer, mouseOverHandler, additionalClassForCard, additionalClassForImage}: PlaceCardScreenProps): JSX.Element {

  const classForCard = ['place-card'];
  const classForImage = ['place-card__image-wrapper'];

  if(additionalClassForCard) {
    classForCard.push(additionalClassForCard);
  }

  if(additionalClassForImage) {
    classForImage.push(additionalClassForImage);
  }

  const setPlaceMark = () => {
    if(additionalClassForCard === 'cities__place-card') {
      return (
        <div className="place-card__mark">
          <span>{offer.mark}</span>
        </div>
      );
    }
  };

  return (
    <article
      className={classForCard.join(' ')}
      onMouseOver={() => {
        mouseOverHandler(offer.title);
      }}
    >

      {setPlaceMark()}
      <div className={classForImage.join(' ')}>
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
