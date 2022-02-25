import React from 'react';
import {Link} from 'react-router-dom';
import PlaceCardInfo from '../place-card-info/place-card-info';
import ReviewForm from '../reviews-form/reviews-form';

import {Offer} from '../../types/offer';
import {Review} from '../../types/review';

type PropertyScreenProps = {
  offer: Offer,
  review: Review,
}

function getPropertyImage(src: string, key: number): JSX.Element {
  return (
    <div className="property__image-wrapper" key={key}>
      <img className="property__image" src={src} alt="Photo_studio" />
    </div>
  );
}

function getPropertyInsideItem(item: string, key: number): JSX.Element {
  return (
    <li className="property__inside-item" key={key}>
      {item}
    </li>
  );
}

function Property(props: PropertyScreenProps): JSX.Element {
  const {offer} = props;
  const {review} = props;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.OfferCard.src.map((src: string, index: number) =>
              getPropertyImage(src, index),
            )}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{offer.OfferCard.mark}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.OfferCard.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: '80%'}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.OfferCard.features.entire}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.OfferCard.features.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.OfferCard.features.adults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.OfferCard.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.inside.map((item, index) =>
                  getPropertyInsideItem(item, index),
                )}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.host.src} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.status}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src={review.user.src} width="54" height="54" alt="Reviews avatar" />
                    </div>
                    <span className="reviews__user-name">
                      {review.user.name}
                    </span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{width: '80%'}} />
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      {review.text}
                    </p>
                    <time className="reviews__time" dateTime={review.date}>April 2019</time>
                  </div>
                </li>
              </ul>
              <ReviewForm />
            </section>
          </div>
        </div>
        <section className="property__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <Link to="/#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place_image" />
                </Link>
              </div>
              <PlaceCardInfo offer={offer.OfferCard}/>
            </article>

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <Link to="/#">
                  <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place_image" />
                </Link>
              </div>
              <PlaceCardInfo offer={offer.OfferCard}/>
            </article>

            <article className="near-places__card place-card">
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <Link to="/#">
                  <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place_image" />
                </Link>
              </div>
              <PlaceCardInfo offer={offer.OfferCard}/>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Property;
