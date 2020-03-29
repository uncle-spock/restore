import React from "react";
import { connect } from "react-redux";

import "./order-list.scss";
import {
  cartItemIncrease,
  cartItemDecrease,
  cartItemDelete
} from "../../actions";

const OrderList = ({
  items,
  totalOrderPrice,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const renderRow = (item, index) => {
    const { id, title, totalCount, totalPrice } = item;

    return (
      <li key={id} className="list-group-item">
        <span className="order-list-count">{index + 1}</span>

        <span>{title}</span>

        <span>{totalCount}</span>

        <span>${totalPrice}</span>

        <div className="order-list-actions">
          <button
            type="button"
            className="btn btn-outline-success btn-sm"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            disabled={totalCount < 2}
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    );
  };

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
        {items.map((item, index) => renderRow(item, index))}
      </ul>

      <span className="total-price">Total: ${totalOrderPrice}</span>
    </>
  );
};

const mapStateToProps = state => ({
  items: state.cart.cartItems,
  totalOrderPrice: state.cart.totalOrderPrice
});

const mapDispatchToProps = {
  onIncrease: cartItemIncrease,
  onDecrease: cartItemDecrease,
  onDelete: cartItemDelete
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
