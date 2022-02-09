import "./item.css";
import{useState} from 'react';
import { useNavigate } from "react-router-dom";

function Item({ product }) {
const navigate = useNavigate();  
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
      {!show &&
      <button onClick={() => navigate(`/item/${product.id}`)}>
        Ver más...
      </button>} 
    </div>
    );
  };

export default Item;



