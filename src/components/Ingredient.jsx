// src/components/Ingredient.jsx
import React from 'react';

const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
  return (
    <div>
      <p>{ingredient.name}</p>
      <button onClick={() => onClick(ingredient)}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Ingredient;
