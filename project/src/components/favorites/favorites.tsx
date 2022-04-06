import React from 'react';
import {useLayoutEffect} from 'react';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {fetchFavoritesAction} from '../../store/api-actions';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoriteLocationsList from '../favorite-locations-list/favorite-locations-list';

import {NameSpace} from '../../const';
import Footer from '../footer/footer';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state[NameSpace.favorites]);
  const isFaviritesEmpty = offers.length === 0;

  useLayoutEffect(() => {
    dispatch(fetchFavoritesAction);
  }, [dispatch]);

  const mainClassName = cn('page__main', 'page__main--favorites', {
    'page__main--favorites-empty': isFaviritesEmpty,
  });

  return (
    <>
      <main className={mainClassName}>
        <div className="page__favorites-container container">
          {isFaviritesEmpty
            ? <FavoritesEmpty />
            : <FavoriteLocationsList offers={offers} />}
        </div>
      </main>
      <Footer />
    </>

  );
}

export default Favorites;
