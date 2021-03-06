import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import HeaderNavLogged from '../header-nav-logged/header-nav-logged';
import HeaderNavNotLogged from '../header-nav-not-logged/header-nav-not-logged';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getUserDataForHeader} from '../../store/user-process/selectors';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const {authStatus, email} = useAppSelector(getUserDataForHeader);
  const isAuthorisedUser = authStatus === AuthorizationStatus.Auth;

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main} data-testid="header-logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isAuthorisedUser ? <HeaderNavLogged dispatch={dispatch} email={email} /> : <HeaderNavNotLogged />}
        </div>
      </div>
    </header>
  );
}

export default Header;
