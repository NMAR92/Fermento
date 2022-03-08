import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../components/ItemDetailContainer/ItemDetailContainer.css"
import { Link, useNavigate } from "react-router-dom";
import { getFirestore } from "../firebase";
import "../pages/styles_pages/Cart.scss";
import { MdDelete } from 'react-icons/md';
import {getCurrentDate} from '../components/Date/index'

const CartPage = () => {
  const {cart, clear, removeItem, TotalPrice} = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mailc, setMailc] = useState("");
  const [ername, setERName] = useState("");
  const [erform, setERForm] = useState("");
  const [erphone, setERPhone] = useState("");
  const [ermail, setERMail] = useState("");
  const [ermailc, setERMailc] = useState("");



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

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    
  //validacion de formulario
  if (ername || erform || erphone || ermail || ermailc) {
    setERName(null);
    setERForm(null);
    setERMail(null);
    setERMailc(null);
    setERPhone(null);
}   else if (!name || !phone || !mail) {
      setERForm(() => "Por favor llene todos los campos");
      console.log("Por favor llene todos los campos");
      return false;
     } else if (!(name.length > 4)) {
      setERName(() => "Su nombre debe tener al menos 5 caracteres");
      console.log("Su nombre debe tener al menos 5 caracteres");
      return false;
      } else if (typeof phone !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(phone)) {
        setERPhone(() => "Ingrese solo números");
        return false;
      } else if (phone.length !== 10) {
        setERPhone(() => "Ingrese un número telefónico de 10 dígitos");
        return false;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail)) {
        setERMail(() => "Ingrese una cuenta de mail valida");
        console.log("Ingrese una cuenta de mail valida");
        return false;
      } else if (mail !== mailc) {
        setERMailc(() => "La cuenta de mail no ha sido confirmada");
        console.log("La cuenta de mail no ha sido confirmada");
        return false;
      }

      //crea orden
      const newOrder = {
        buyer: { name, phone, mail },
        items: cart,
        total: getTotal(cart),
        date: getCurrentDate()
      };

      //manda orden al firebase
      const db = getFirestore();
      const ordersCollection = db.collection("orders");
      const response = await ordersCollection.add(newOrder);
      clear(cart);
      navigate(`/fermento/thanks/${response.id}`);

    };
  };
  
  return (
    <div>
      {cart.length === 0 ? (
        <div className="Dcart">
          <div className="order">
          No hay productos seleccionados{" "}
          <Link to="/fermento">Realiza tu seleccion</Link>
          </div>
        </div>
      ) : (
        <div className="Dcart">
          <div className="order">
            <h3 className="topborder">
              {" "}
              <span>SU ORDEN</span>
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((purchase) => {
                  return (
                    <tr className="fila" key={purchase.item.id}>
                      <td>{purchase.item.name}</td>
                      <td>{purchase.item.price}</td>
                      <td> × {purchase.quantity}</td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => removeItem(purchase.item.id)}
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="delete_2" onClick={clear}>
              Borrar todos
            </button>
            <div className="price_total">
              <div className="total_price"> Precio total:</div>
              <TotalPrice />
            </div>
          </div>
          <div className="datos">
            <h3 className="topborder">
              <span>SUS DATOS PERSONALES</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="etiqueta">
                <label htmlFor="name">Nombre:</label>
                <input
                  className="input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Escriba su nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>  
                <div className="error_v">{ername}</div>
              
              <div className="etiqueta">
                <label htmlFor="phone">Teléfono:</label>
                <input
                  className="input"
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Escriba su teléfono"
                  value={phone}
                  min="0"
                  
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>  
                <div className="error_v">{erphone}</div>
              
              <div className="etiqueta">
                <label htmlFor="mail">Mail:</label>
                <input
                  className="input"
                  type="text"
                  id="mail"
                  name="mail"
                  placeholder="Escriba su mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>  
                <div className="error_v">{ermail}</div>

                <div className="etiqueta">
                <label htmlFor="mailc"> Conf. Mail:</label>
                <input
                  className="input"
                  type="text"
                  id="mailc"
                  name="mailc"
                  placeholder="Confirme su mail"
                  value={mailc}
                  onChange={(e) => setMailc(e.target.value)}
                />
              </div>  
                <div className="error_v">{ermailc}</div>  
                <div className="error_v">{erform}</div>
              
                <input className="delete_2" type="submit" value="Finalizar compra" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
