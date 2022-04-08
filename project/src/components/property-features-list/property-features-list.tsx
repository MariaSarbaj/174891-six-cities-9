import {uniqueId} from '../../services/utils';

function PropertyFeaturesList(props: { inside: string[] }): JSX.Element {
  const { inside } = props;
  return (
    <ul className="property__inside-list" data-testid="room-features-list">
      {inside.map((item) => (
        <li key={uniqueId('features')} className="property__inside-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default PropertyFeaturesList;
