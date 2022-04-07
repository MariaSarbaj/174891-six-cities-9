import React from 'react';
import ReviewForm from '../../components/reviews-form/reviews-form';
import ReviewsList from '../reviews-list/reviews-list';
import {useAppSelector} from '../../hooks/hooks';
import {getReviewBlockData} from '../../store/reviews-process/selectors';
import {AuthorizationStatus, REVIEW} from '../../const';
import {Review} from '../../types/offers';

function compare(a: Review, b: Review) {
  return b.date.localeCompare(a.date);
}

export function getReviewsForRendering(data: Review[]) {
  const sortedReviews = [...data].sort(compare);
  return sortedReviews.slice(0, REVIEW.MaxCount);
}

function ReviewBlock(): JSX.Element {
  const {reviews, authorizationStatus} = useAppSelector(getReviewBlockData);
  const isAuthorisedUser = authorizationStatus === AuthorizationStatus.Auth;

  const reviewsForRendering = getReviewsForRendering(reviews);

  return (
    <section className="property__reviews reviews" data-testid="property-reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount" data-testid="reviews-amount">{reviewsForRendering.length}</span></h2>
      <ReviewsList reviews={reviewsForRendering} />
      {isAuthorisedUser && <ReviewForm />}
    </section>
  );
}

export default ReviewBlock;
