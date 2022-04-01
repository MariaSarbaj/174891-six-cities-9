import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ReviewForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';

import {Offers, Offer} from '../../types/offers';

import LocationsList from '../locations-list/locations-list';

import { useAppSelector } from '../../hooks';

function getProcessedOffersData(offers: Offers) {
  return offers.reduce((acc: { [offerId: string]: Offer}, offer: Offer) => {
    acc[offer.id] = offer;
    return acc;
  }, {});
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

function Property(): JSX.Element | null {
  const navigate = useNavigate();
  const { offers, reviews } = useAppSelector((state) => state);
  const offersStore = getProcessedOffersData(offers);

  const currentPath = document.location.pathname;
  const [, , offerId] = currentPath.split('/');
  const offer = offersStore[offerId];

  useEffect(() => {
    if (!offer) {
      navigate('/notfound', { replace: true });
    }
  });

  if (!offer) {
    return null;
  }

  const cityLocation = offer.city;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.map((src: string, index: number) =>
              getPropertyImage(src, index),
            )}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{offer.isPremium}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
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
              <span className="property__rating-value rating__value">{offer.rating.toFixed(1)}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
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
                  <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {offer.host.name}
                </span>
                <span className="property__user-status">
                  {offer.host.isPro}
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
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews}/>
              <ReviewForm />
            </section>
          </div>
        </div>
        <Map city={cityLocation} offers={offers.slice(0, 3)} selectedOffer={Number(offerId)} additionalClass={'property__map'}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <LocationsList offers={offers.slice(0,3)} additionalClass={'near-places__list'} additionalClassForCard={'near-places__card'} additionalClassForImage={'near-places__image-wrapper'} />
        </section>
      </div>
    </main>
  );
}

export default Property;
