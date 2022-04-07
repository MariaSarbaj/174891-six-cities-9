import React from 'react';
import {Review} from '../../types/offers';
import {getRatingStyleData} from '../../services/utils';

function ReviewItem(props: { review: Review }): JSX.Element {
  const { review: {
    review, date, rating, user: { avatarUrl, name },
  } } = props;
  const displayedDate = new Date(date).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  return (
    <li className="reviews__item" data-testid="review-item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getRatingStyleData(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review}
        </p>
        <time className="reviews__time" dateTime={date} data-testid="review-time">{displayedDate}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
