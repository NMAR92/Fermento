import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };
    setCart((prevState) => [...prevState, newItem]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    var a = false;
      cart.forEach(element => {
         if (element.item.id === parseInt(id)){a = true;}})
      console.log(a)
      return a;
    };


  const Add =(id, item, quantity) => {
    if (isInCart(id)){
      cart.forEach(element => {
        if (element.item.id === parseInt(id)){element.quantity = element.quantity + quantity}})
    } else{
      addItem(item, quantity);
    };
   };
  
  
  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== parseInt(id)));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, isInCart, Add, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

