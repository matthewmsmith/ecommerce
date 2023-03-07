import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);



  const onAdd = (product, quantity) => {
    const isProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((previousPrice) => previousPrice + product.price * quantity);
    setTotalQuantities((previousQuantities) => previousQuantities + quantity);

    if (isProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} was successfully added to cart`);
  };

  const onRemove = (product) => {
      const foundProduct = cartItems.find((item) => item._id === product._id)
      const newCartItems = cartItems.filter((item) => item._id !== product._id)

      setTotalPrice((previousPrice) => previousPrice - foundProduct.price * foundProduct.quantity);
      setTotalQuantities((previousQuantities) => previousQuantities - foundProduct.quantity);
      setCartItems(newCartItems);
    
  }

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if (value === "inc" ) {
    setCartItems([ ...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((previousPrice) => previousPrice + foundProduct.price);
      setTotalQuantities((totalQuantities) => totalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((previousPrice) => previousPrice - foundProduct.price);
        setTotalQuantities((totalQuantities) => totalQuantities - 1);
      }
    }
  };

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
      } else {
        return previousQty - 1;
      }
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setCartItems,
        setShowCart,
        cartItems,
        setTotalPrice,
        totalPrice,
        setTotalQuantities,
        totalQuantities,
        qty,
        onAdd,
        increaseQty,
        decreaseQty,
        toggleCartItemQuantity,
        onRemove
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
