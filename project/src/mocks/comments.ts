import {Comment} from '../types/offers';
import {datatype, date, internet, lorem} from 'faker';

const Comment_AMOUNT = 2;

const makeFakeComments = (amount = Comment_AMOUNT): Comment[] => Array.from(
  Array(amount),
  () => ({
    comment: lorem.paragraph(Comment_AMOUNT),
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

export default makeFakeComments;
