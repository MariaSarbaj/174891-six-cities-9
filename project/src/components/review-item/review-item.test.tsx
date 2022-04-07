import React from 'react';
import {render, screen} from '@testing-library/react';
import ReviewItem from './review-item';
import makeFakeReviews from '../../mocks/reviews';

describe('Component: Review', () => {
  it('should render correctly', () => {
    const review = makeFakeReviews(1)[0];
    review.date = '2022-03-26';
    const controlDateText = 'March 2022';

    render(<ReviewItem review={review} />);

    const avatar = screen.getByAltText(/Reviews avatar/i);
    expect(avatar.getAttribute('src')).toBe(review.user.avatarUrl);

    expect(screen.getByText(review.user.name)).toBeInTheDocument();
    expect(screen.getByText(review.review)).toBeInTheDocument();
    expect(screen.getByText(controlDateText)).toBeInTheDocument();

    expect(screen.getByTestId('review-time').getAttribute('dateTime')).toBe(review.date);
  });
});
