import * as React from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../components/firebase";

const ThankYouPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = React.useState({});
  

  React.useEffect(() => {
    const db = getFirestore();
    db.collection("orders")
      .doc(orderId)
      .get()
      .then((res) => setOrder({ id: res.id, ...res.data() }));
  }, [orderId]);

  if (!order.id) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Gracias por su compra, sr/sra. {order.buyer.name}</h1>
      <h2>Detalle de su compra:</h2>
      <p>Productos:</p>
      <p>{order.items[0].item.name}</p>
      <p>Toal:{order.total}</p>
    </div>
  );
};
export default ThankYouPage;