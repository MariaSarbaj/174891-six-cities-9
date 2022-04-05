import React from 'react';
import cn from 'classnames';

import CityList from '../cities-list/cities-list';
import HomePageEmpty from '../home-page-empty/home-page-empty';
import HomePageContent from '../home-page-content/home-page-content';

import { useAppSelector } from '../../hooks/hooks';
import {NameSpace} from '../../const';

function HomePage(): JSX.Element {
  const {city, offers} = useAppSelector((state) => ({
    offers: state[NameSpace.offers],
    city: state[NameSpace.city],
  }));

  const sortedByCityOffers = offers.filter((item) => item.city.name === city);
  const isOffersListEmpty = sortedByCityOffers.length === 0;

  const pageClassName = cn('page__main page__main--index', {
    'page__main--index-empty': isOffersListEmpty,
  });
  const contentWrapperClassName = cn('cities__places-container', 'container', {
    'cities__places-container--empty': isOffersListEmpty,
  });

  return  (
    <main className={pageClassName}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityList />
      </div>
      <div className="cities">
        <div className={contentWrapperClassName}>
          {isOffersListEmpty ? <HomePageEmpty /> : <HomePageContent />}
        </div>
      </div>
    </main>
  );
}

export default HomePage;
