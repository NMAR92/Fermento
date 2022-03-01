import { createContext, useState } from "react";
import Cart from "../components/Icono";
import "../components/Icono/cart.scss";


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
         if (element.item.id === id){a = true;}})
      return a;
    };

  const Add =(id, item, quantity) => {
    if (isInCart(id)){
      cart.forEach(element => {
        if (element.item.id === id){element.quantity = element.quantity + quantity}})
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
            <span className="total_price"> {`$${total}`}</span>
        </div>
      )
  };
  
  const TotalQuantity =() => {
    var total =0;
    cart.forEach(element => {
      (total = total + element.quantity)});
    return(
      <div >
          {total!==0 && <div className="cart_total"> <Cart/> 
          <span className="badge"> {`${total}`}</span>
          </div>}
      </div>
    )
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, clear, isInCart, Add, removeItem, TotalPrice, TotalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

