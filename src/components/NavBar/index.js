import "./NavBar.css";
import Cart from "../Icono";
import { Link } from "react-router-dom";


export function NavBar() {
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
          <div class="dropdown">
            <button className="dropbtn">
              Productos
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="category/1">Cervezas</Link>
              <Link to="category/2">Probioticos</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Cart/>
      </div>
    </nav>
  );
}
