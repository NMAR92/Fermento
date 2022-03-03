import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from "../components/Itemcount";
import { CartContext } from "../context/CartContext";
import {getFirestore} from "../firebase";
import { Rings } from  'react-loader-spinner';
import "../pages/styles_pages/ItemDetail.scss";


const ItemDetailPage = () => {
  const { productId } = useParams();
  const [counter, setCounter] = useState(0);
  const [isProductinCart, setisProductInCart] = useState(false);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {isInCart, Add} = useContext(CartContext);
  const [msj, setMsj] = useState();
  

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    const selectedProduct = productsCollection.doc(productId);

    setIsLoading(true);
    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("El producto no existe");
        setProduct({ ...response.data(), id: response.id });
      })
      .finally(() => setIsLoading(false));
  }, [productId]);

  const desc = () => {
    if (counter === 0) {
      setCounter((prevState) => prevState);
    }else {
      setCounter((prevState) =>(prevState - 1));
    }
  };

  const inc = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleAddToCart = () => {
    if (counter === 0) {
      setMsj(() => "Por favor seleccione al menos una unidad");
    } else if (counter > product.stock) {
      setMsj(() => "No contamos con el stock las unidades seleccionadas");
      } else if (counter !== 0) {
        Add(productId, product, counter);
        isInCart(productId);
        setisProductInCart(true);
        }
    
      
  };

  if (isLoading || !product) return(
    <div>
    <div className="Dcard">
      <Rings className="Rings"/>
    </div>
    </div>
  )

   return (
     <div>
       <div className="Dcard">
         <div className="Dimg-container">
           <img src={product.img} alt={product.name} />
         </div>
         <div className="Ddata-container">
           <p className="Dtitle"> {product.name}</p>
           <p>Precio: ${product.price}</p>
           <p>Descripcion: {product.description}</p>
           <p>Stock: {product.stock}</p>
           <div className="B">
             {!isProductinCart ? (
               <>
                 <>
                   <ItemCount inc={inc} desc={desc} counter={counter} />
                 </>
                 <button className="Dbutton" onClick={handleAddToCart} >
                   Agregar al carrito{" "}
                 </button>
                 <div className="error_v">{msj}</div>
               </>
             ) : (
               <button className="Dbutton" onClick={() => navigate(`/cart`)}>
                 Terminar mi compra
               </button>
             )}
           </div>
         </div>
       </div>
     </div>
   );
};

export default ItemDetailPage;

