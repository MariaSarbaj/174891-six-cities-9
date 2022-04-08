import {useEffect} from 'react';
import cn from 'classnames';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {fetchFavoritesAction} from '../../store/api-actions';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import FavoriteLocationsList from '../../components/favorite-locations-list/favorite-locations-list';
import Header from '../../components/header/header';
import {getFavorites} from '../../store/favorites-process/selectors';

import Footer from '../../components/footer/footer';

function FavoritesPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getFavorites);
  const isFaviritesEmpty = offers.length === 0;

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const mainClassName = cn('page__main', 'page__main--favorites-page', {
    'page__main--favorites-empty': isFaviritesEmpty,
  });

  return (
    <div className="page">
      <Header />
      <main className={mainClassName} data-testid="favorites-main">
        <div className="page__favorites-container container">
          {isFaviritesEmpty
            ? <FavoritesEmpty />
            : <FavoriteLocationsList offers={offers} />}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default FavoritesPage;
