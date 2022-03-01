import "./item.scss";
// import{useState} from 'react';
import { useNavigate } from "react-router-dom";



function Item({ product }) {
const navigate = useNavigate();  
// const[show, setshow] = useState(true)
// const buttonhandler = () =>{
//   return setshow(!show)
// }

return (
  <div className="item-card">
    <div className="img-container">
    <img src={product.img} alt={product.name} onClick={() => navigate(`/item/${product.id}`)}/>
    </div>
    <div className="data-container">
      {/* <button className="navBtnN"onClick={buttonhandler}>{show ? "Mostrar" : "Ocultar"}</button>
      <p className="name"> {product.name}</p>
      {!show && <p className="price">Precio: ${product.price}</p>}
      {!show && <button className="navBtn" onClick={() => navigate(`/item/${product.id}`)}>Ver más...</button>} */}
      <p className="name"> {product.name}</p>
      <p className="price">Precio: ${product.price}</p>
      <button className="navBtn" onClick={() => navigate(`/item/${product.id}`)}>Ver más...</button>

    </div>
    
  </div>
);
  };

export default Item;



