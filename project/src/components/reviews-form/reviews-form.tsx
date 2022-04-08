import {SyntheticEvent, useState, useEffect, Fragment} from 'react';
import {errorHandle} from '../../services/error-handle';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {sendReviewAction} from '../../store/api-actions';
import {REVIEW, MAX_STARS_RATING} from '../../const';
import {ReviewFormDataType} from '../../types/other-types';
import {getHotelId} from '../../store/room-process/selectors';

export const FORM_DATA_INIT_STATE = { rating: null, review: '', checkboxesValue: getCheckboxesInitState() };

function getCheckboxesInitState() {
  return Array(MAX_STARS_RATING).fill(false);
}

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<ReviewFormDataType>(FORM_DATA_INIT_STATE);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormLocked, setIsFormLocked] = useState(false);
  const dispatch = useAppDispatch();
  const hotelId = useAppSelector(getHotelId);

  function clearReview() {
    setFormData({...FORM_DATA_INIT_STATE});
    setReviewText('');
    setIsFormLocked(false);
  }

  function handleFormChange(e: SyntheticEvent) {
    if (!isFormLocked) {
      const { name, value } = e.target as HTMLFormElement;
      const newState = { ...formData, [name]: value, checkboxesValue: getCheckboxesInitState()};
      if (newState.rating) {
        newState.checkboxesValue[MAX_STARS_RATING - newState.rating] = true;
      }
      setFormData(newState);
    }
  }

  function handleFormSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (hotelId) {
      setIsFormLocked(true);
      dispatch(sendReviewAction({
        review: formData,
        hotelId,
        onClearReviewForm: clearReview,
        onLockReviewForm: setIsFormLocked,
      }));
    } else {
      errorHandle({error: new Error()});
    }
  }

  function setReviewText(text: string) {
    const textareaElement = document.getElementById('room-comment-text') as HTMLTextAreaElement | null;
    if (textareaElement) {
      textareaElement.value = text;
    }
  }

  useEffect(() => {
    const {rating, review} = formData;
    setIsFormValid(rating !== null && review.length >= REVIEW.MinLength);
  }, [formData]);

  return (
    <form className="reviews__form form" action="#" method="post" onChange={handleFormChange} onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {formData.checkboxesValue.map((item, i) => {
          const value = MAX_STARS_RATING - i;
          return (
            <Fragment key={value}>
              <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={item} readOnly/>
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={REVIEW.MaxLength} defaultValue={formData.review}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid || isFormLocked} >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
