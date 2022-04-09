import makeFakeReviews from '../../mocks/comments';
import {getReviewsForRendering} from './review-block';
import {shuffle} from '../../services/utils';
import {Comment} from '../../types/offers';
import {REVIEW} from '../../const';

const reviewCount = REVIEW.MaxCount + 2;
const datesForFakeReviews = Array(reviewCount).fill(31).map((el, i) => `2022-03-${el - i}`);

const fakeReviews = makeFakeReviews(reviewCount);
const reviewsWithCustomDate = fakeReviews.map((item, i) => ({...item, date: datesForFakeReviews[i]}));

const controlReviews = reviewsWithCustomDate.slice(0, REVIEW.MaxCount);
const testData = shuffle(reviewsWithCustomDate) as Comment[];

it('should resultReviews be equal to control reviews', () =>{
  expect(getReviewsForRendering(testData)).toEqual(controlReviews);
});
