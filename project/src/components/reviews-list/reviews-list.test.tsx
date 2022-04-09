import {render, screen} from '@testing-library/react';
import ReviewsList from './reviews-list';
import makeFakeReviews from '../../mocks/comments';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const comments = makeFakeReviews(5);

    render(<ReviewsList comments={comments} />);

    expect(screen.getAllByTestId('review-item').length).toBe(comments.length);
  });
});
