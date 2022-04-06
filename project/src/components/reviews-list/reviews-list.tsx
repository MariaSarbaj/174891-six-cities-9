import React from 'react';
import ReviewItem from '../review-item/review-item';
import {Reviews, Review} from '../../types/review';

import {REVIEW} from '../../const';

function compare(a: Review, b: Review) {
  const first = Date.parse(a.date);
  const second = Date.parse(b.date);
  return second - first;
}

function getCommentsForRendering(data: Review[]) {
  const sortedComments = [...data].sort(compare);
  return sortedComments.slice(0, REVIEW.MaxCount);
}

type ReviewsListProps = {
  reviews: Reviews,
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const reviewsForRendering = getCommentsForRendering(reviews);

  return (
    <ul className="reviews__list">
      {reviewsForRendering.map((review: Review) =>
        <ReviewItem review={review} key={review.id}/>,
      )}
    </ul>
  );
}

export default ReviewsList;
