import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/offers';

function ReviewsList(props: { reviews: Review[]}): JSX.Element {
  const {reviews} = props;

  return (
    <ul className="reviews__list" data-testid="reviews-list">
      {reviews.map((review) =>
        <ReviewItem review={review} key={review.id}/>,
      )}
    </ul>
  );
}

export default ReviewsList;
