import {useParams} from 'react-router-dom';
import {DEFAULT_CITY} from '../../const';

function HomePageEmpty(): JSX.Element {
  const pathParams = useParams();
  const city = pathParams.city ?? DEFAULT_CITY;

  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places" data-testid="main-page-empty">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default HomePageEmpty;
