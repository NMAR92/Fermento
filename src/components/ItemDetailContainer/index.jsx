import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { getItem } from "C:/Users/msrov/Documents/Coderhouse_React/fermentos/fermento/src/BD_one.js";

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      getItem()
      // aqui queda la ejecucion de la promesa de array de productos
        .then((data) => setProducts(data))
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
        // aqui maneja la promesa para que haga lo que tiene que hacer cuando se resuelva y guatde los  datos de los productos en el estado!
    }, []);
  
    return (
        <div className="ItemDetailContainer">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => <ItemDetail key={product.id} product={product} />)
      )}
    </div>
    );
  }

export default ItemDetailContainer;