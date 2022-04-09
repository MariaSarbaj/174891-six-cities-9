import {uniqueId} from '../../services/utils';

function PropertyFeaturesList(props: { goods: string[] }): JSX.Element {
  const { goods } = props;
  return (
    <ul className="property__inside-list" data-testid="room-features-list">
      {goods.map((item) => (
        <li key={uniqueId('features')} className="property__inside-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default PropertyFeaturesList;
