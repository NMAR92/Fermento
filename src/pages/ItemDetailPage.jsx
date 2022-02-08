import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemCount from "../components/Itemcount";
import { CartContext } from "../context/CartContext";


const ItemDetailPage = () => {
  const { productId } = useParams();
  const [counter, setCounter] = useState(0);
  const [isProductinCart, setisProductInCart] = useState(false);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {isInCart, Add} = useContext(CartContext);

  useEffect(() => {
    const URL = `http://localhost:3001/productos/${productId}`;
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
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
    if (counter !== 0) {
      Add(productId, product, counter);
      isInCart(productId);
      setisProductInCart(true);
      }
  };

  if (isLoading || !product) return <p>Cargando...</p>;

   return (
    <div >
      <img src={product.img} alt="" />
      <br></br>
      <p>Nombre: {product.name}</p>
      <p>Precio: {product.price}</p>
      <p>Descripcion: {product.description}</p>
      <p>Stock: {product.stock}</p>
      {!isProductinCart ? (
      <><>
        <ItemCount inc={inc} desc={desc} counter={counter} />
        </><button onClick={handleAddToCart}>Agregar al carrito</button></>
    ) : (
      <button onClick={() => navigate(`/cart`)}>Terminar mi compra</button>
    )}
    </div>
  );
};

export default ItemDetailPage;
