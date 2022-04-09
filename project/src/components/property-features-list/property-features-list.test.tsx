import {render, screen} from '@testing-library/react';
import PropertyFeaturesList from './property-features-list';
import makeFakeOffers from '../../mocks/offers';

describe('Component: RoomFeaturesList', () => {
  const features = makeFakeOffers(1)[0].goods;

  it.each(features)('should render correctly %s', (feature) => {
    render(<PropertyFeaturesList goods={features} />);

    expect(screen.getByText(feature)).toBeInTheDocument();
  });
});
