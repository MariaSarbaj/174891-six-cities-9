import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import useHover from '../../hooks/useHover';
import cn from 'classnames';

import PlaceCardInfo from '../place-card-info/place-card-info';

import {Offer} from '../../types/offers';
import { PlaceCardType } from '../../types/other-types';

type PlaceCardScreenProps = {
  offer: Offer,
  placeCardType: PlaceCardType,
  setActiveOffer?: (x: number | null) => void,
}

function PlaceCard(props: PlaceCardScreenProps): JSX.Element {
  const {
    placeCardType,
    setActiveOffer,
    offer,
  } = props;

  const [hoverRef, isHover] = useHover<HTMLElement>();

  useEffect(() => {
    if (setActiveOffer !== undefined) {
      isHover ? setActiveOffer(offer.id) : setActiveOffer(null);
    }
  }, [offer.id, setActiveOffer, isHover]);

  const articleClass = cn('place-card', {
    'cities__place-card': placeCardType === 'main',
    'near-places__card': placeCardType === 'room',
  });

  const imgWrapperClass = cn('place-card__image-wrapper', {
    'cities__image-wrapper': placeCardType === 'main',
    'near-places__image-wrapper': placeCardType === 'room',
  });

  const setPlaceMark = () => {
    if(offer.isPremium) {
      return (
        <div className="place-card__mark">
          <span>{offer.isPremium}</span>
        </div>
      );
    }
  };

  return (
    <article
      className={articleClass}
      ref={hoverRef}
    >
      {setPlaceMark()}
      <div className={imgWrapperClass}>
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
