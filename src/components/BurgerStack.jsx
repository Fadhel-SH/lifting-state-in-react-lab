// src/components/BurgerStack.jsx
import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <li
            key={index}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;