import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((previousQty) => {
      if (previousQty >= 20) {
        return previousQty - 1;
      } else {
        return previousQty + 1;
      }
    });
  };

  const decreaseQty = () => {
    setQty((previousQty) => {
      if (previousQty - 1 < 1) {
      return 1;
      }else {
        return previousQty - 1;
      }
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
