// Basket.js

import React, { useContext } from 'react';
import { BasketContext } from './BasketContext';  // Correct the path here

// ... rest of the code


const Basket = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {basket.map(item => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => removeFromBasket(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Basket;  // Make sure to export the component
