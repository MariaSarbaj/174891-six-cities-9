import React from 'react';
import {useAppDispatch} from '../../hooks/hooks';
import {setCityName} from '../../store/reducers/city-reducer';
import FavoritPlacesList from '../favorite-places-list/favorite-places-list';

import LocationLink from '../location-link/location-link';
import {LocationsDataType} from '../../types/offers';

function FavoriteLocation(props: { locationData: LocationsDataType }):JSX.Element {
  const dispatch = useAppDispatch();
  const { cityName, offers } = props.locationData;

  function handleClick() {
    dispatch(setCityName(cityName));
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item" onClick={handleClick}>
          <LocationLink cityName={cityName} />
        </div>
      </div>
      <FavoritPlacesList offers={offers} />
    </li>
  );
}
export default FavoriteLocation;
