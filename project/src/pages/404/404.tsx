import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function ErrorPage(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to='/'>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to='#'>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to='/login'>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <h1 className="places__found">404 Not Found</h1>
          <Link className="header__logo-link" to={AppRoute.Main}>
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
