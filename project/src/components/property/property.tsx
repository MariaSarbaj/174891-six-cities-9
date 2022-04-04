import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import ReviewForm from '../reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import HostBlock from '../../components/host-block/host-block';

import LocationsList from '../locations-list/locations-list';

import {useAppDispatch,  useAppSelector } from '../../hooks/hooks';
import {fetchRoomDataAction} from '../../store/api-actions';

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
  const dispatch = useAppDispatch();
  const curLocation = useLocation();
  const {room, offersNearby, authorizationStatus, reviews, offers} = useAppSelector((state) => ({
    room: state.room,
    offersNearby: state.offersNearby,
    authorizationStatus: state.authorizationStatus,
    reviews: state.reviews,
    offers: state.offers,
  }));
  const isAuthorisedUser = authorizationStatus === 'authorized';

  const currentPath = curLocation.pathname;
  const [, , offerId] = currentPath.split('/');

  useEffect(() => {
    if (offerId) {
      dispatch(fetchRoomDataAction(offerId));
    }
  }, [offerId, dispatch]);

  if (!room) {
    return null;
  }

  const cityLocation = room.city;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {room.images.map((src: string, index: number) =>
              getPropertyImage(src, index),
            )}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{room.isPremium}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {room.title}
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
              <span className="property__rating-value rating__value">{room.rating.toFixed(1)}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {room.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {room.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {room.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{room.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {room.inside.map((item, index) =>
                  getPropertyInsideItem(item, index),
                )}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <HostBlock host={room.host} />
              <div className="property__description">
                <p className="property__text">
                  {room.description}
                </p>
                <p className="property__text">
                  {room.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews}/>
              {isAuthorisedUser && <ReviewForm />}
            </section>
          </div>
        </div>
        <Map city={cityLocation} offers={offers.slice(0, 3)} selectedOffer={Number(offerId)} additionalClass={'property__map'}/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <LocationsList offers={offersNearby} additionalClass={'near-places__list'} additionalClassForCard={'near-places__card'} additionalClassForImage={'near-places__image-wrapper'} />
        </section>
      </div>
    </main>
  );
}

export default Property;
