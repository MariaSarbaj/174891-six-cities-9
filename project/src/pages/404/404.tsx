import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../../components/header/header';

function ErrorPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="page__main">
        <div className="container">
          <h1 >404 Not Found</h1>
          <Link className="header__logo-link" to={AppRoute.Main}>
            <span>Вернуться на главную</span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
