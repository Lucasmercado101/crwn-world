import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import {
  selectCartItems,
  seletCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToPros = createStructuredSelector({
  cartItems: selectCartItems,
  total: seletCartTotal
});

export default connect(mapStateToPros)(CheckoutPage);
