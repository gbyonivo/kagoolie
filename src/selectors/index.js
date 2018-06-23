import { LOW_TO_HIGH } from '../constants/gridFilter';

export const selectBeers = ({ beersReducer: { beers } }) =>
  [...beers].sort((a, b) => a.name > b.name ? 1 : -1);
export const selectBeersForGrid = ({ beersReducer: { beers, gridFilter } }) =>
  [...beers]
    .sort((a, b) => gridFilter === LOW_TO_HIGH ? a.abv - b.abv : b.abv - a.abv)
    .slice(0, 8);
export const selectGridFilterValue = ({ beersReducer: { gridFilter } }) => gridFilter;
export const selectBeersForCarousel = ({ beersReducer: { beers } }) =>
  beers.slice(0, 4);