import "./itemDetail.css";
import {Count} from "../Itemcount";
import{useState} from 'react';

function ItemDetail({ product }) {
const[show, setshow] = useState(true)
const buttonhandler = () =>{
  return setshow(!show)
}

return (
    <div className="itemDetail">
      <img src={product.picture}/>
      <br></br>
      <button onClick={buttonhandler} >{show ? "Mostrar" : "Ocultar"}</button>   
      {!show && <p>Nombre: {product.name}</p>}
      {!show && <p>Precio: {product.price}</p>}
      {!show && <p>Descripcion: {product.description}</p>}
      {!show && <Count/>} 
    </div>
    );
  };

export default ItemDetail;