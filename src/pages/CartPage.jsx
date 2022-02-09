import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ItemDetailContainer/ItemDetailContainer.css"
import { Link } from "react-router-dom";


const CartPage = () => {
  const {cart, clear, removeItem, TotalPrice} = useContext(CartContext);

  return (
    <div>
      <h1>CartPage</h1>
      {(cart.length === 0 ) ? (<div>No hay productos seleccionados <Link to="/">Realiza tu seleccion</Link></div>
      ):( 
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((purchase) => {
            return (
              <tr key={purchase.item.id}>
                <td>{purchase.item.name}</td>
                <td>{purchase.quantity}</td>
                <td>
                  <button onClick={() => removeItem(purchase.item.id)}>
                    Delete Item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={clear}>Borrar todos</button>
      <TotalPrice/>
      </div>
      )}
    </div>
  );
};

export default CartPage;
