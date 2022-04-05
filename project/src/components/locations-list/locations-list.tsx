import React, {memo} from 'react';
import PlaceCard from '../place-card/place-card';
import cn from 'classnames';
import {LocationsListType} from '../../types/other-types';

import { Offer} from '../../types/offers';

type LocationListScreenProps = {
  offers: Offer[],
  setActiveOffer?: (x: number | null) => void,
  locationsListType: LocationsListType,
}

function LocationsList({offers, setActiveOffer, locationsListType}: LocationListScreenProps):JSX.Element {

  const cardClassName = cn('places__list', {
    'cities__places-list': locationsListType === 'main',
    'tabs__content': locationsListType === 'main',
    'near-places__list': locationsListType === 'room',
  });

  return (
    <div className={cardClassName}>

      {offers.map((offer) =>
        <PlaceCard offer={offer} key={offer.id} setActiveOffer={setActiveOffer} placeCardType="main"/>,
      )}

    </div>

  );
}

export default memo(LocationsList, (prevProps, nextProps) => {
  const isOfferIdsEqual = (prevOffers: Offer[], nextOffers: Offer[]) => prevOffers.every(
    (item, index) => item.id === nextOffers[index].id);
  return isOfferIdsEqual(prevProps.offers, nextProps.offers)
    && prevProps.locationsListType === nextProps.locationsListType;
});
