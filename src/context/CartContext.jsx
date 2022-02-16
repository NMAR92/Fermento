import { createContext, useState } from "react";
import Cart from "../components/Icono"

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
   
   const TotalPrice =() => {
    var total =0;
    cart.forEach(element => {
      (total = total + (element.quantity)*(element.item.price))});
      return (
        <div>
            {total}
        </div>
      )
  };
  
  const TotalQuantity =() => {
    var total =0;
    cart.forEach(element => {
      (total = total + element.quantity)});
    return(
      <div>
          {total!==0 && <div> <Cart/> {`${total}`}</div>}
      </div>
    )
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== parseInt(id)));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, isInCart, Add, removeItem, TotalPrice, TotalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

