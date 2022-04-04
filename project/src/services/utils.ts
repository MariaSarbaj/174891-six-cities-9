import {OffersSortingType} from '../types/other-types';
import {Mapping} from '../const';

export const getTextBySortingType = (type: OffersSortingType) => {
  const mapping = Mapping;
  return mapping[type];
};

