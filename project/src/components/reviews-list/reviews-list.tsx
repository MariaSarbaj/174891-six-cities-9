import ReviewItem from '../review-item/review-item';
import {Comment} from '../../types/offers';

function ReviewsList(props: { comments: Comment[]}): JSX.Element {
  const {comments} = props;

  return (
    <ul className="reviews__list" data-testid="reviews-list">
      {comments.map((comment) =>
        <ReviewItem comment={comment} key={comment.id}/>,
      )}
    </ul>
  );
}

export default ReviewsList;
