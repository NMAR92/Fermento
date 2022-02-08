import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const URL = `http://localhost:3001/cervezas/${productId}`;
      setIsLoading(true);
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .finally(() => setIsLoading(false));
    }, [productId]);
  
    if (isLoading || !products) return <p>Cargando...</p>;
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