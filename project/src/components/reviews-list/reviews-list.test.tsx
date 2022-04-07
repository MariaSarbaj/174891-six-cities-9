import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewsList from './reviews-list';
import makeFakeReviews from '../../mocks/reviews';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const reviews = makeFakeReviews(5);

    render(<ReviewsList reviews={reviews} />);

    expect(screen.getAllByTestId('review-item').length).toBe(reviews.length);
  });
});
