import {memo} from 'react';
import PlaceCard from '../place-card/place-card';
import cn from 'classnames';
import {LocationsListProps} from '../../types/other-types';
import { Offer} from '../../types/offers';

function LocationsList(props: LocationsListProps):JSX.Element {

  const { offers, placeCardType } = props;
  const isPlaceCard = placeCardType === 'placeCard';
  const isPlaceNearby = placeCardType === 'placeNearby';

  const placeListClassName = cn('places__list', {
    'cities__places-list': isPlaceCard,
    'tabs__content': isPlaceCard,
    'near-places__list': isPlaceNearby,
  });

  return (
    <div className={placeListClassName} data-testid="place-card-list">

      {offers.map((offer) =>
        <PlaceCard offer={offer} key={offer.id} onActiveOffer={props.onActiveOffer} placeCardType={placeCardType}/>,
      )}

    </div>

  );
}

export default memo(LocationsList, (prevProps, nextProps) => {
  const isOfferIdsEqual = (prevOffers: Offer[], nextOffers: Offer[]) => prevOffers.every(
    (item, index) => item.id === nextOffers[index].id && item.isFavorite === nextOffers[index].isFavorite);
  return isOfferIdsEqual(prevProps.offers, nextProps.offers)
    && prevProps.placeCardType === nextProps.placeCardType;
});
