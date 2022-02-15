import {Link} from 'react-router-dom';

import PlaceCardInfo from '../place-card-info/place-card-info';

function PlaceCard(): JSX.Element {
  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place_image" />
        </Link>
      </div>
      <div className="place-card__info">
        <PlaceCardInfo />
      </div>
    </article>
  );
}

export default PlaceCard;
