import React from 'react';
import {Link} from 'react-router-dom';

import FavoritePlaceCard from '../favorite-place-card/favorite-place-card';

import {OfferCard, Offers} from '../../types/offer';

type FavoritesScreenProps = {
  offers: Offers
}

function Favorites({offers}: FavoritesScreenProps): JSX.Element {
  const [offer] = offers;

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/#">
                    <span>Amsterdam</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritePlaceCard offer={offer.OfferCard as OfferCard}/>

                <FavoritePlaceCard offer={offer.OfferCard as OfferCard}/>
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to="/#">
                    <span>Cologne</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                <FavoritePlaceCard offer={offer.OfferCard as OfferCard}/>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>

  );
}

export default Favorites;
