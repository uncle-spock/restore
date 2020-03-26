import React from "react";

import "./order-list.scss";

const OrderList = () => {
  return (
    <>
      <h2>Your Order's List</h2>

      <div className="order-list-header">
        <span className="order-list-count">#</span>
        <span>Product</span>
        <span>Count</span>
        <span>Price</span>
        <span>Actions</span>
      </div>

      <ul className="order-list list-group list-group-flush">
        <li className="list-group-item">
          <span className="order-list-count">1</span>

          <span>item</span>

          <span>Count</span>

          <span>$40</span>

          <div className="order-list-actions">
            <button type="button" className="btn btn-outline-success btn-sm">
              <i className="fa fa-plus"></i>
            </button>

            <button type="button" className="btn btn-outline-warning btn-sm">
              <i className="fa fa-minus"></i>
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>

      <span className="total-price">Total: $200</span>
    </>
  );
};

export default OrderList;
