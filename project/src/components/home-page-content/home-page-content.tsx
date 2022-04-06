import React from 'react';
import {useState, useMemo} from 'react';
import SortingMenu from '../sorting-menu/sorting-menu';
import LocationsList from '../locations-list/locations-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/hooks';
import {Offer} from '../../types/offers';
import {OffersSortingType} from '../../types/other-types';
import {NameSpace, DEFAULT_LOCATION} from '../../const';

const compareFunctionMapping = {
  none: () => 0,
  byPriceUp: (a: Offer, b: Offer) => a.price - b.price,
  byPriceDown: (a: Offer, b: Offer) => b.price - a.price,
  byRatingDown: (a: Offer, b: Offer) => b.rating - a.rating,
};

function getCompareFunction(type: OffersSortingType): (a: Offer, b: Offer) => number {
  return compareFunctionMapping[type];
}

function getRenderData(city: string, offers: Offer[], sortingType: OffersSortingType) {
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const sortedOffers = [...sortedByCityOffers].sort(getCompareFunction(sortingType));
  const cityLocation = sortedOffers[0].city.location ?? DEFAULT_LOCATION;
  return {sortedOffers, cityLocation};
}

function HomePageContent(): JSX.Element {

  const {offers, city} = useAppSelector((state) => ({
    offers: state[NameSpace.offers],
    city: state[NameSpace.city],
  }));

  const [activeOffer, setActiveOffer] = useState(null as number | null);
  const [sortingType, setSortingType] = useState<OffersSortingType>('none');
  const {sortedOffers, cityLocation} = useMemo(
    () => getRenderData(city, offers, sortingType),
    [city, offers, sortingType],
  );

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} places to stay in {city}</b>

        <SortingMenu setSortingType={setSortingType} sortingType={sortingType} />

        <LocationsList setActiveOffer={setActiveOffer} offers={sortedOffers} locationsListType="placeCard"/>
      </section>
      <div className="cities__right-section">
        <Map city={cityLocation} offers={offers} selectedOffer={activeOffer}/>
      </div>
    </div>
  );
}

export default HomePageContent;
