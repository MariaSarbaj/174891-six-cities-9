import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import useHover from '../../hooks/useHover';

import PlaceCardInfo from '../place-card-info/place-card-info';

import {Offer} from '../../types/offers';

type PlaceCardScreenProps = {
  offer: Offer,
  additionalClassForCard: string,
  additionalClassForImage?: string,
  setActiveOffer?: (x: number | null) => void,
}

function PlaceCard({offer, additionalClassForCard, additionalClassForImage, setActiveOffer}: PlaceCardScreenProps): JSX.Element {

  const [hoverRef, isHover] = useHover<HTMLElement>();

  useEffect(() => {
    if (setActiveOffer) {
      isHover ? setActiveOffer(offer.id) : setActiveOffer(null);
    }
  }, [offer.id, setActiveOffer, isHover]);

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
          <span>{offer.isPremium}</span>
        </div>
      );
    }
  };

  return (
    <article
      className={classForCard.join(' ')}
      ref={hoverRef}
    >

      {setPlaceMark()}
      <div className={classForImage.join(' ')}>
        <Link to="/#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place_image" />
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfo offer={offer}/>
      </div>
    </article>
  );
}

export default PlaceCard;
