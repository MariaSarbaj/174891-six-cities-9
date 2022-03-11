import React from 'react';
import PlaceCard from '../place-card/place-card';

import {Offers, Offer, OfferCard} from '../../types/offer';

type LocationListScreenProps = {
  offers: Offers,
  setActiveOffer: (x: string | null) => void,
  additionalClass?: string,
  additionalClassForCard: string,
  additionalClassForImage: string,
}

function LocationsList({offers, setActiveOffer, additionalClass, additionalClassForCard, additionalClassForImage}: LocationListScreenProps):JSX.Element {

  const cls = ['places__list'];

  if (additionalClass) {
    cls.push(additionalClass);
  }

  return (
    <div className={cls.join(' ')}>

      {offers.map((offer: Offer) =>
        <PlaceCard offer={offer.OfferCard as OfferCard} key={offer.OfferCard.id} additionalClassForCard={additionalClassForCard} additionalClassForImage={additionalClassForImage} mouseOverHandler={(title: string) => {setActiveOffer(title);}}/>,
      )}

    </div>

  );
}

export default LocationsList;
