import {Review} from '../types/offers';
import {datatype, date, internet, lorem} from 'faker';

const REVIEW_AMOUNT = 2;

const makeFakeReviews = (amount = REVIEW_AMOUNT): Review[] => Array.from(
  Array(amount),
  () => ({
    review: lorem.paragraph(REVIEW_AMOUNT),
    date: date.past(1).toString(),
    id: datatype.number(),
    rating: datatype.float(),
    user: {
      avatarUrl: internet.avatar(),
      id: datatype.number(),
      isPro: datatype.boolean(),
      name: internet.userName(),
    },
  }),
);

export default makeFakeReviews;
