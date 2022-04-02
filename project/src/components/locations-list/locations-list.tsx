import React from 'react';
import PlaceCard from '../place-card/place-card';

import {Offers, Offer} from '../../types/offers';

type LocationListScreenProps = {
  offers: Offers,
  setActiveOffer?: (x: number | null) => void,
  additionalClass?: string,
  additionalClassForCard: string,
  additionalClassForImage?: string,
}

function LocationsList({offers, setActiveOffer, additionalClass, additionalClassForCard, additionalClassForImage}: LocationListScreenProps):JSX.Element {

  const cls = ['places__list'];

  if (additionalClass) {
    cls.push(additionalClass);
  }

  return (
    <div className={cls.join(' ')}>

      {offers.map((offer: Offer) =>
        <PlaceCard offer={offer as Offer} key={offer.id} additionalClassForCard={additionalClassForCard} additionalClassForImage={additionalClassForImage} setActiveOffer={setActiveOffer}/>,
      )}

    </div>

  );
}

export default LocationsList;
