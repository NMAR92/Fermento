import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ItemDetailContainer/ItemDetailContainer.css"


const CartPage = () => {
  const {cart, clear, removeItem} = useContext(CartContext);

  return (
    <div>
      <h1>CartPage</h1>
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
    </div>
  );
};

export default CartPage;
