import React from 'react';
import {useState, useCallback} from 'react';
import SortingMenu from '../sorting-menu/sorting-menu';
import LocationsList from '../locations-list/locations-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks/hooks';
import {Offer} from '../../types/offers';
import {OffersSortingType} from '../../types/other-types';
import {NameSpace} from '../../const';

const compareFunctionMapping = {
  none: () => 0,
  byPriceUp: (a: Offer, b: Offer) => {
    if (a.price === b.price) {
      return 0;
    }
    return a.price - b.price;
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

function getCompareFunction(type: OffersSortingType): (a: Offer, b: Offer) => number {
  return compareFunctionMapping[type];
}

function HomePageContent(): JSX.Element {

  const {offers, city} = useAppSelector((state) => ({
    offers: state[NameSpace.offers],
    city: state[NameSpace.city],
  }));

  const [activeOffer, setActiveOffer] = useState(null as number | null);
  const [sortingType, setSortingType] = useState<OffersSortingType>('none');
  const memoSetSortingType = useCallback(() => setSortingType, [setSortingType]);
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const sortedOffers = [...sortedByCityOffers].sort(getCompareFunction(sortingType));
  // const cityName = useAppSelector((state) => state.city);
  // const { setActiveOffer, offers, activeOffer} = props;
  // const [sortingType, setSortingType] = useState<OffersSortingType>('none');
  //
  // const sortedOffers: Offers = [...offers].sort(getCompareFunction(sortingType));

  const cityLocation = sortedOffers[0].city.location;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedByCityOffers.length} places to stay in {city}</b>

        <SortingMenu setSortingType={memoSetSortingType} sortingType={sortingType} />

        <LocationsList setActiveOffer={setActiveOffer} offers={sortedOffers} locationsListType="main"/>
      </section>
      <div className="cities__right-section">
        {/*<Map city={city} offers={offers} selectedOffer={activeOffer}/>*/}
        <Map city={cityLocation} offers={offers} selectedOffer={activeOffer}/>
      </div>
    </div>
  );
}

export default HomePageContent;
