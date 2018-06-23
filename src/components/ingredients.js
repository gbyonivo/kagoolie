import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredients.scss';

const Ingredients = ({ ingredients }) => <div className={styles.ingredientsWrapper}>
  <h6><em>Ingredients</em></h6>
  {
    Object.keys(ingredients).map((key, index) => <div key={`${key}${index}`} className={styles.ingredients}>
      <div className={styles.ingredient}>{key}</div>
      <div className={styles.ingredientDetails}>
        {
          typeof ingredients[key] === 'string'
            ? ingredients[key]
            : ingredients[key].map((ingredient, i) => <span key={`${ingredient.name}${i}`}>
              {ingredient.name}
              <span className={styles.ingredientAmount}>
                {` ${ingredient.amount.value}`}
                {`${ingredient.amount.unit}, `}
              </span>
            </span>)
        }
      </div>
    </div>)
  }
</div>;

Ingredients.propTypes = {
  ingredients: PropTypes.object.isRequired
};

export default Ingredients;