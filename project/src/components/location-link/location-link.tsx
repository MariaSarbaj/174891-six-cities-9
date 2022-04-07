import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function LocationLink(props: {cityName: string}) {
  const {cityName} = props;

  return (
    <Link to={`${AppRoute.Main}${cityName}`}>
      <div className="locations__item-link">
        <span data-testid="location-link-city-name">{cityName}</span>
      </div>
    </Link>
  );
}

export default LocationLink;
