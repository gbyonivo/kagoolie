import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => <div>
  {
    Object.keys(ingredients).map((key, index) => <div key={`${key}${index}`}>
      <span>{key}</span>
      {
        typeof ingredients[key] === 'string'
          ? ingredients[key]
          : ingredients[key].map((ingredient, i) => <span key={`${ingredient.name}${i}`}>
            {ingredient.name}
            {ingredient.amount.value}
            {ingredient.amount.unit}
          </span>)
      }
    </div>)
  }
</div>;

Ingredients.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Ingredients;