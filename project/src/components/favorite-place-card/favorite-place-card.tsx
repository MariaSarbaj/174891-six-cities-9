import PlaceCardInfo from '../place-card-info/place-card-info';

function FavoritePlaceCard(): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place_image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <PlaceCardInfo />
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
