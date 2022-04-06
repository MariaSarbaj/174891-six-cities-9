import {OffersSortingType} from '../types/other-types';
import {Mapping} from '../const';

export const getTextBySortingType = (type: OffersSortingType) => {
  const mapping = Mapping;
  return mapping[type];
};

export function getRandomValue(arr: Array<unknown>) {
  const maxIndex = arr.length - 1;
  const index = Math.round(Math.random() * maxIndex);
  return arr[index];
}
