import { LOW_TO_HIGH } from '../../src/constants/gridFilter';

export default {
  beersReducer: {
    beers: [{
      id: 1,
      name: 'pluto',
      abv: 4.5,
      description: 'description',
      image_url: 'sdsds',
      ingredients: {
        malt: [{ name: 'malter', amount: 8, unit: 'kg' }],
        yeast: 'salah',
      }
    }, {
      id: 2,
      name: 'jupiter',
      abv: 4.1,
      description: 'descriptive',
      image_url: 'sdsds',
      ingredients: {
        malt: [{ name: 'malting', amount: 9, unit: 'g' }],
        yeast: 'firmino',
      }
    }],
    errors: [],
    isFetchingBeers: true,
    gridFilter: LOW_TO_HIGH
  }
};