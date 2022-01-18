import "./item.css";
import {Count} from "../Itemcount";
import{useState} from 'react';

function Item({ product }) {
const[show, setshow] = useState(true)
const buttonhandler = () =>{
  return setshow(!show)
}

return (
    <div className="item">
      <img src={product.img} alt={product.name}/>
      <br></br>
      <button onClick={buttonhandler} >{show ? "Mostrar" : "Ocultar"}</button>   
      {!show && <p>Nombre: {product.name}</p>}
      {!show && <p>Precio: {product.price}</p>}
      {!show && <Count/>} 
    </div>
    );
  };

export default Item;



