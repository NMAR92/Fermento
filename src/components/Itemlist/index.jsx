import Item from "../Item";
import { useEffect, useState } from "react";
import {getFirestore} from "../../firebase"
import { useParams } from "react-router-dom";
import { Rings } from  'react-loader-spinner';
import "./Itemlist.css";


function Itemlist() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { categoryId } = useParams();
    
  useEffect(() => {
    //OPCION 1: aqui traes todos los productos
      // const db = getFirestore();
      // const productsCollection = db.collection("productos");

    //OPCION 2: aqui trae todos los productos y si hay un categoryId asociado a la pagina filtra  
    const db = getFirestore();
    let productsCollection;
    if (categoryId) {
      productsCollection = db
        .collection("productos")
        .where("categoryId", "==", Number(categoryId));
    } else {
      productsCollection = db.collection("productos");
    }  
  
      const getDataFromFirestore = async () => {
        setIsLoading(true);
        try {
          const response = await productsCollection.get();
          if (response.empty) console.log("No hay productos");
          setProducts(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      getDataFromFirestore();
    }, [categoryId]);

 //para json server... 
 
// const URL = "http://localhost:3001/productos";

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((json) => setProducts(json))
  //     .catch((err) => setError(err))
  //     .finally(() => setIsLoading(false));
  // }, []);

  if (isLoading) {
    return (
      <div className="item-container">
        <Rings className="Rings"/>
      </div>
    )  
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else 
    return (
      <div className="item-container">
        {isLoading ? (
          <Rings className="Rings"/>
        ) : (
          products.map((product) => <Item key={product.id} product={product} />)
        )}
      </div>
    );
  };

export default Itemlist;
