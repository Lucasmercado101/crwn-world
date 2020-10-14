import React from 'react';
import StripeCheckoutButton from '../../components/stripePayButton';
import Cart from '../../unstated/cart';
import './checkout.sass';

function Checkout() {
  const { cart, removeItem, removeOne, addOne } = Cart.useContainer();
  let total = 0;
  cart.forEach((item) => (total += item.price * item.amount));

  return (
    <div className="checkout">
      <table className="checkout__table">
        <thead>
          <tr className="checkout-header-row">
            <th className="checkout-header-row__header">Product</th>
            <th className="checkout-header-row__header">Quantity</th>
            <th className="checkout-header-row__header">Price</th>
            <th className="checkout-header-row__header">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart.map((i, index) => (
              <tr className="checkout-table-item" key={index}>
                <td>{i.name}</td>
                <td className="checkout-table-item__quantity">
                  <button onClick={() => removeOne(i.name)}>&lt;</button>
                  <p>{i.amount}</p>
                  <button onClick={() => addOne(i.name)}> &gt;</button>
                </td>
                <td>{i.price}</td>
                <td className="checkout-table-item__btn">
                  <button
                    className="checkout-btn"
                    onClick={() => removeItem(i.name)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className="checkout__total">TOTAL ${total}</p>
      {total > 0 && (
        <>
          <p className="checkout__test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
          </p>
          <StripeCheckoutButton price={total} />
        </>
      )}
    </div>
  );
}

export default Checkout;
