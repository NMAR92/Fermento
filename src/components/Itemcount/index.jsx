import React from "react";
import "./count.css";

export function Count() {
    const [counter, setCounter] = React.useState(0);

    const sumClick = () => {
        setCounter(counter+1);
    };

    const restClick = () => {
        if (counter === 0) {
            setCounter(counter);
          } else {
            setCounter(counter-1);
          }

    };


    return (
        <div className="count">
            <table >
                <thead>
                    <tr>
                        <th><button onClick={sumClick}>+</button></th>
                        <th align="center">{counter}</th>
                        <th><button onClick={restClick}>-</button></th>
                    </tr>
                    <tr>
                        <th colspan="3"><button>Agregar al carrito</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}