import Item from "../Item";
import { useEffect, useState } from "react";
import { getProductos } from "C:/Users/msrov/Documents/Coderhouse_React/fermentos/fermento/src/BD.js";

function Itemlist() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      getProductos()
      // aqui queda la ejecucion de la promesa de array de productos
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
        // aqui maneja la promesa para que haga lo que tiene que hacer cuando se resuelva y guatde los  datos de los productos en el estado!
    }, []);
  
    return (
        <div className="Itemlist">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
    );
  }

export default Itemlist;