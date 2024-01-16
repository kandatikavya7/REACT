// BasketContext.js
import React, { createContext, useState } from 'react';

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeFromBasket = (productId) => {
    setBasket(basket.filter(item => item.id !== productId));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, BasketContext };
