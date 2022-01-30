import Item from "../Item";
import { useEffect, useState } from "react";

const URL = "http://localhost:3001/productos";

function Itemlist() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Cargando ...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else 
    return (
      <div className="Itemlist">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          products.map((product) => <Item key={product.id} product={product} />)
        )}
      </div>
    );
  };

export default Itemlist;
