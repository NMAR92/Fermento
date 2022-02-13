import ItemDetail from "../ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore} from "../firebase";

function ItemDetailContainer() {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      //traes un producto con un Id especifico
      const db = getFirestore();
      const productsCollection = db.collection("productos");
      const selectedProduct = productsCollection.doc(productId);
  
      setIsLoading(true);
      selectedProduct
        .get()
        .then((response) => {
          if (!response.exists) console.log("El producto no existe");
          setProducts({ ...response.data(), id: response.id });
        })
        .finally(() => setIsLoading(false));
    }, [productId]);

    
        
    // useEffect(() => {
    //   const URL = `http://localhost:3001/cervezas/${productId}`;
    //   setIsLoading(true);
    //   fetch(URL)
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data))
    //     .finally(() => setIsLoading(false));
    // }, [productId]);

    if (isLoading || !products) {
      return <p>Cargando ...</p>;
    } else
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