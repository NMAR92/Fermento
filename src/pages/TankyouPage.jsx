import * as React from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";
import { Rings } from  'react-loader-spinner';


import "./styles_pages/Thank.scss";

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
    return (
      <div className="card">
        <Rings className="Rings" />
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <div className="card_title">
          <h3 className="topborder">
            <span className="font-title_1">Thank You!</span>
          </h3>
          <br></br>
          <span className="font-title_2">Sr/Sra. {order.buyer.name}</span>
        </div>
        <div className="card_title">
          <h1>Total a abonar :${order.total}</h1>
          <span className="font-title_3">
            El proveedor se pondrá en contacto con usted para coordinar el
            envío.
          </span>
          <br></br>
          <span className="font-title_3">
            Fermentos agradece su compra y espera su pronto regreso.
          </span>
        </div>
      </div>
    </div>
  );
};
export default ThankYouPage;