import React from 'react';
import {useState} from 'react';
import SortingMenu from '../sorting-menu/sorting-menu';
import LocationsList from '../locations-list/locations-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { Offers, Offer, City } from '../../types/offers';
import {OffersSortingType} from '../../types/other-types';

function getCompareFunction(type: OffersSortingType): (a: Offer, b: Offer) => number {
  const mapping = {
    none: () => 0,
    byPriceUp: (a: Offer, b: Offer) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price > b.price ? 1 : -1;
    },
    byPriceDown: (a: Offer, b: Offer) => {
      if (a.price === b.price) {
        return 0;
      }
      return a.price < b.price ? 1 : -1;
    },
    byRatingDown: (a: Offer, b: Offer) => {
      if (a.rating === b.rating) {
        return 0;
      }
      return a.rating > b.rating ? -1 : 1;
    },
  };
  return mapping[type];
}

type HomePageContentProps = {
  setActiveOffer: (x: number | null) => void,
  offers: Offers,
  city: City,
  activeOffer: number | null
}

function HomePageContent(props: HomePageContentProps): JSX.Element {
  const cityName = useAppSelector((state) => state.city);
  const { setActiveOffer, offers, city, activeOffer} = props;
  const [sortingType, setSortingType] = useState<OffersSortingType>('none');

  const sortedOffers = [...offers].sort(getCompareFunction(sortingType));

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {cityName}</b>

        <SortingMenu setSorting={setSortingType} sortingType={sortingType} />

        <LocationsList setActiveOffer={setActiveOffer} offers={sortedOffers} additionalClassForCard="main" />
      </section>
      <div className="cities__right-section">
        <Map city={city} offers={offers} selectedOffer={activeOffer}/>
      </div>
    </div>
  );
}

export default HomePageContent;
