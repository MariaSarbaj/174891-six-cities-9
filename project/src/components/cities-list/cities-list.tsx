import React from 'react';
import { useAppDispatch } from '../../hooks';
import { setCity } from '../../store/action';
import { cityNames } from '../../const';

function CityList(props: { city: string }) {
  const { city } = props;
  const dispatch = useAppDispatch();

  function handleClick(cityName: string) {
    return () => dispatch(setCity(cityName));
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cityNames.map((cityName) => {
          const className = `locations__item-link tabs__item${cityName === city && ' tabs__item--active'}`;
          return (
            <li key={cityName} className="locations__item" onClick={handleClick(cityName)}>
              <a className={className} href="#locations__item">
                <span>{cityName}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CityList;