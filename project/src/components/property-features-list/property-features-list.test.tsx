import React from 'react';
import {render, screen} from '@testing-library/react';
import PropertyFeaturesList from './property-features-list';
import makeFakeOffers from '../../mocks/offers';

describe('Component: RoomFeaturesList', () => {
  const features = makeFakeOffers(1)[0].inside;

  it.each(features)('should render correctly %s', (feature) => {
    render(<PropertyFeaturesList inside={features} />);

    expect(screen.getByText(feature)).toBeInTheDocument();
  });
});
