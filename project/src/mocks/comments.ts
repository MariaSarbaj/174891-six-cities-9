import {Comment} from '../types/offers';
import {datatype, date, internet, lorem} from 'faker';

const commentAmount = 2;

const makeFakeComments = (amount = commentAmount): Comment[] => Array.from(
  Array(amount),
  () => ({
    comment: lorem.paragraph(commentAmount),
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
