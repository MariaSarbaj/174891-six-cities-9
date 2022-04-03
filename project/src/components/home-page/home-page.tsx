import React, {useState} from 'react';

import CityList from '../cities-list/cities-list';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import HomePageContent from '../home-page-content/home-page-content';

import { useAppSelector } from '../../hooks/hooks';

function HomePage(): JSX.Element {
  const { city, offers } = useAppSelector((state) => state);

  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const isOffersListEmpty = sortedByCityOffers.length === 0;

  return  (
    <main className={`page__main page__main--index${isOffersListEmpty && ' page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList />
      </div>
      <div className="cities">
        {isOffersListEmpty
          ? <HomePageEmpty />
          : <HomePageContent setActiveOffer={setActiveOffer} offers={sortedByCityOffers} activeOffer={activeOffer}/>}
      </div>
    </main>
  );
}

export default HomePage;
