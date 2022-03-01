import "./NavBar.css";
// import Cart from "../Icono";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext} from '../../context/CartContext';


export function NavBar() {
  const {TotalQuantity} = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="title">
        <Link to="/" id="title">Fermentos</Link>
        </div>
      </div>
      <div className="container">
        <div className="menu">
          <Link to="/">Inicio</Link>
          <div className="dropdown">
            <button className="dropbtn">
              Productos
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/category/1">Probioticos</Link>
              <Link to="/category/2">Cervezas</Link>
              <Link to="/category/3">Quesos</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Link to="cart"><TotalQuantity/></Link>
      </div>
    </nav>
  );
}
