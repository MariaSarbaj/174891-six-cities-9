import React from 'react';
import ReviewItem from '../review-item/review-item';
import {Reviews, Review} from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews,
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) =>
        <ReviewItem review={review} key={review.id}/>,
      )}
    </ul>
  );
}

export default ReviewsList;
