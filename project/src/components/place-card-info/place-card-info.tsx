import React from 'react';
import {Link} from 'react-router-dom';
import {OfferCard} from '../../types/offer';

type PlaceCardInfoScreenProps = {
  offer: OfferCard
}

function PlaceCardInfo(offer: PlaceCardInfoScreenProps): JSX.Element {
  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: '80%'}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to="/#">{offer.offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.offer.features.entire}</p>
    </>
  );
}

export default PlaceCardInfo;
