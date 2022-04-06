import React, {memo} from 'react';
import PlaceCard from '../place-card/place-card';
import cn from 'classnames';
import {PlaceCardType} from '../../types/other-types';

import { Offer} from '../../types/offers';

type LocationListScreenProps = {
  offers: Offer[],
  setActiveOffer?: (x: number | null) => void,
  locationsListType: PlaceCardType,
}

function LocationsList({offers, setActiveOffer, locationsListType}: LocationListScreenProps):JSX.Element {

  const cardClassName = cn('places__list', {
    'cities__places-list': locationsListType === 'placeCard',
    'tabs__content': locationsListType === 'placeCard',
    'near-places__list': locationsListType === 'placeNearby',
  });

  return (
    <div className={cardClassName}>

      {offers.map((offer) =>
        <PlaceCard offer={offer} key={offer.id} setActiveOffer={setActiveOffer} placeCardType={locationsListType}/>,
      )}

    </div>

  );
}

export default memo(LocationsList, (prevProps, nextProps) => {
  const isOfferIdsEqual = (prevOffers: Offer[], nextOffers: Offer[]) => prevOffers.every(
    (item, index) => item.id === nextOffers[index].id && item.isFavorite === nextOffers[index].isFavorite);
  return isOfferIdsEqual(prevProps.offers, nextProps.offers)
    && prevProps.locationsListType === nextProps.locationsListType;
});
