import { LOW_TO_HIGH } from '../constants/gridFilter';

export const selectBeers = ({ beersReducer: { beers } }) => beers;
export const selectBeersForGrid = ({ beersReducer: { beers, gridFilter } }) =>
  beers
    .sort((a, b) => gridFilter === LOW_TO_HIGH ? a.abv - b.abv : b.abv - a.abv)
    .slice(0, 8);
export const selectGridFilterValue = ({ beersReducer: { gridFilter } }) => gridFilter;