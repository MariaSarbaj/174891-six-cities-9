import { SyntheticEvent } from 'react';
import {finishAuthAction} from '../../store/api-actions';
import { AppDispatch } from '../../types/other-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function HeaderNavLogged(props: {dispatch: AppDispatch, email: string}): JSX.Element {
  const {dispatch, email} = props;

  function handleLinkClick(e: SyntheticEvent) {
    e.preventDefault();
    dispatch(finishAuthAction);
  }

  return (
    <nav className="header__nav" data-testid="header-nav-logged">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile" data-testid="header-nav-link-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{email}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#nav-link" onClick={handleLinkClick} data-testid="header-signout-link">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavLogged;
