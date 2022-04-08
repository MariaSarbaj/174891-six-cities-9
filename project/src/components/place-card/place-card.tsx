import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import useHover from '../../hooks/use-hover';
import cn from 'classnames';

import PlaceCardMark from '../place-card-mark/place-card-mark';
import Bookmark from '../bookmark/bookmark';
import {PlaceCardProps} from '../../types/other-types';
import {getAccommodationTitle, getRatingStyleData} from '../../services/utils';
import {AppRoute} from '../../const';

const getImageSize = (isFavorite: boolean) => isFavorite
  ? { width: '150', height: '110' }
  : { width: '260', height: '200' };

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {
    placeCardType,
    onActiveOffer,
    offer,
  } = props;

  const isTypePlaceCard = placeCardType === 'placeCard';
  const isTypePlaceNearby = placeCardType === 'placeNearby';
  const isTypeFavorite = placeCardType === 'favorite';

  const [hoverRef, isHover] = useHover<HTMLElement>();

  useEffect(() => {
    if (onActiveOffer !== undefined) {
      isHover ? onActiveOffer(offer.id) : onActiveOffer(null);
    }
  }, [offer.id, onActiveOffer, isHover]);

  const articleClass = cn('place-card', {
    'cities__place-card': isTypePlaceCard,
    'near-places__card': isTypePlaceNearby,
    'favorites__card': isTypeFavorite,
  });

  const imgWrapperClass = cn('place-card__image-wrapper', {
    'cities__image-wrapper': isTypePlaceCard,
    'near-places__image-wrapper': isTypePlaceNearby,
    'favorites__image-wrapper': isTypeFavorite,
  });

  const infoClass = cn('place-card__info', {
    'favorites__card-info': isTypeFavorite,
  });

  const {width, height} = getImageSize(isTypeFavorite);

  return (
    <article
      className={articleClass}
      ref={hoverRef}
      data-testid="place-card"
    >
      {offer.isPremium && <PlaceCardMark type="placeCard" />}
      <div className={imgWrapperClass} data-testid="place-card-img-wrapper">
        <Link to="/#">
          <img className="place-card__image" src={offer.previewImage} width={width} height={height} alt="Place_image" />
        </Link>
      </div>
      <div className={infoClass} data-testid="place-card-info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark hotelId={offer.id} isFavorite={offer.isFavorite} type={placeCardType} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingStyleData(offer.rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}${offer.id}`} data-testid="place-card-property-link">{offer.title}</Link>
        </h2>
        <p className="place-card__type">{getAccommodationTitle(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
