import React from 'react';
import PlaceCard from '../place-card/place-card';

import {Offers, Offer, OfferCard} from '../../types/offer';

type LocationListScreenProps = {
  offers: Offers,
  setActiveOffer: (x: string | null) => void,
}

function LocationsList({offers, setActiveOffer}: LocationListScreenProps):JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer: Offer) =>
        <PlaceCard offer={offer.OfferCard as OfferCard} key={offer.OfferCard.id} mouseOverHandler={(title: string) => {setActiveOffer(title);}}/>,
      )}

    </div>

  );
}

export default LocationsList;
