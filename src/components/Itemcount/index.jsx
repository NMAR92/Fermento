import React from "react";
import "./itemcount.scss";

const ItemCount = ({ desc, inc, counter }) => {
  return (
    <div>
    <div className="wrapper-count">
      <table className="table_count" >
        <thead>
          <tr>
            <th>
              <button className="count" onClick={desc}>-</button>
            </th>
            <th>{counter}</th>
            <th>
              <button className="count" onClick={inc}>+</button>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    </div>
  );
};

export default ItemCount;
