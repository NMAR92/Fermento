import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ItemDetailContainer/ItemDetailContainer.css"
import { Link, useNavigate } from "react-router-dom";
import { getFirestore } from "../components/firebase";


const CartPage = () => {
  const {cart, clear, removeItem, TotalPrice} = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let navigate = useNavigate();

  //vuelvo a calcular el total pq no logro traerlo como numero desde el context

   const getTotal = (cart) => {
    let total = 0;
    cart.forEach((element) => {
      total += element.item.price * element.quantity;
    });
    return total;
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////
  //para que pagina no se recargue al submit del formulario
  const handleSubmit = async (evt) => {
    evt.preventDefault();

  //validacion de formulario
    if (!name || !phone) {
      console.log("Por favor llene los campos");
      return false;
    }
    
  //crea orden
    const newOrder = {
      buyer: { name, phone },
      items: cart,
      total: getTotal(cart),
    };
  
    //manda orden al firebase
    console.log(newOrder);
    console.log(cart)
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const response = await ordersCollection.add(newOrder);
    clear(cart)
    navigate(`/thanks/${response.id}`);
  };

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
      <p>Precio total:</p><TotalPrice/>
      <br></br>
      <h2>Introduzca sus datos:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escriba su nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Escriba su teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="Finalizar compra" />
      </form>
      </div>
      )}
    </div>
  );
};

export default CartPage;
