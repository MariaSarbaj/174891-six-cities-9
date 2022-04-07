import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import HostBlock from '../../components/host-block/host-block';
import Bookmark from '../../components/bookmark/bookmark';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import PlaceCardMark from '../../components/place-card-mark/place-card-mark';
import PropertyFeaturesList from '../../components/property-features-list/property-features-list';
import ReviewBlock from '../../components/review-block/review-block';

import LocationsList from '../../components/locations-list/locations-list';

import {useAppDispatch,  useAppSelector } from '../../hooks/hooks';
import {fetchRoomDataAction} from '../../store/api-actions';
import {getAccommodationTitle, getRatingStyleData} from '../../services/utils';
import {getRoomPageData} from '../../store/room-process/selectors';

function PropertyPage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const pathParams = useParams();
  const {room, offersNearby} = useAppSelector(getRoomPageData);

  const offerId = pathParams.id;

  useEffect(() => {
    if (offerId) {
      dispatch(fetchRoomDataAction(offerId));
    }
  }, [offerId, dispatch]);

  if (!room) {
    return null;
  }

  const cityLocation = room.city.location;
  const points = [...offersNearby, room].map(({ id, location }) => ({ id, location }));

  return (
    <div className="page" data-testid="room-page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={room.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {room.isPremium && <PlaceCardMark type="room" />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {room.title}
                </h1>
                <Bookmark hotelId={room.id} isFavorite={room.isFavorite} type="room" />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRatingStyleData(room.rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{room.rating.toFixed(1)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {getAccommodationTitle(room.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${room.bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${room.maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{room.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <PropertyFeaturesList inside={room.inside} />
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
              <ReviewBlock />
            </div>
          </div>
          <Map city={cityLocation} points={points} selectedPoint={Number(offerId)} type="room"/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <LocationsList offers={offersNearby} placeCardType="placeNearby" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
