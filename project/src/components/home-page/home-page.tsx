import React, {useState} from 'react';

import CityList from '../cities-list/cities-list';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import HomePageContent from '../home-page-content/home-page-content';

import { OffersProps } from '../../types/offers';

type HomePageScreenProps = OffersProps & { city: string }


function HomePage(props: HomePageScreenProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(null as number | null);
  const { city, offers } = props;
  const cityLocation = offers[0].city;
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const isOffersListEmpty = sortedByCityOffers.length === 0;

  return  (
    <main className={`page__main page__main--index${isOffersListEmpty && ' page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList city={city} />
      </div>
      <div className="cities">
        {isOffersListEmpty
          ? <HomePageEmpty />
          : <HomePageContent setActiveOffer={setActiveOffer} offers={sortedByCityOffers} city={cityLocation} activeOffer={activeOffer}/>}
      </div>
    </main>
  );
}

export default HomePage;
