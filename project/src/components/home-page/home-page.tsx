import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {Offers} from '../../types/offer';

import LocationsList from '../locations-list/locations-list';
import Map from '../map/map';
import {CityLocation} from '../../mocks/city';

type HomePageScreenProps = {
  offersNumber: number,
  offers: Offers,
  selectedOffer: string | null
}

const locations = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function getLocationItem (location: string, key: number): JSX.Element {
  return (
    <li className="locations__item" key={key}>
      <Link className="locations__item-link tabs__item" to='/property'>
        <span>{location}</span>
      </Link>
    </li>
  );
}

function HomePage({offersNumber, offers, selectedOffer}: HomePageScreenProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState(null as string | null);

  return  (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {locations.map((location: string, index: number) =>
              getLocationItem(location, index),
            )}

          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offersNumber} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>

            <LocationsList offers={offers} setActiveOffer={setActiveOffer} additionalClass={'cities__places-list'} additionalClassForCard={'cities__place-card'} additionalClassForImage={'cities__image-wrapper'}/>

          </section>
          <div className="cities__right-section">
            <Map city={CityLocation} offers={offers} selectedOffer={activeOffer} additionalClass={'cities__map'}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
