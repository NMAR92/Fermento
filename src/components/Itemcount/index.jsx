import React from "react";
import "./count.css";

const ItemCount = ({ desc, inc, counter }) => {
  return (
    <div className="count">
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={desc}>-</button>
            </th>
            <th>{counter}</th>
            <th>
              <button onClick={inc}>+</button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ItemCount;
