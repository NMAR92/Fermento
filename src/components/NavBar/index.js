import "./NavBar.css";
import Cart from "../Icono";


export function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="title">
          <h1>Fermentos</h1>
        </div>
      </div>
      <div className="container">
        <div className="menu">
          <a href="#">Inicio</a>
          <a href="#">Envios</a>
          <div class="dropdown">
            <button className="dropbtn">
              Ofertas
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Cerveza</a>
              <a href="#">Yogurt</a>
              <a href="#">Kombucha</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Cart />
      </div>
    </nav>
  );
}
