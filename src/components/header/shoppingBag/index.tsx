import React, { useState } from 'react';
import './shoppingBag.sass';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingBagIcon } from '../../../assets/shopping-bag.svg';
import Cart from '../../../unstated/cart';

const ShoppingBag: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeItem } = Cart.useContainer();
  const cartTotalItems =
    cart.length > 0
      ? cart.reduce((accumulator, next) => {
          return {
            ...accumulator,
            amount: accumulator.amount + next.amount
          };
        }).amount
      : 0;

  return (
    <div className="shopping-bag">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shopping-bag__button"
        data-items={cartTotalItems}
      >
        <ShoppingBagIcon />
      </button>
      {isOpen && (
        <div className="cart-display">
          <div className="cart-display__contents">
            {cart.length > 0 ? (
              cart.map((i, index) => (
                <div key={index} className="cart-display-item">
                  <div className="cart-display-item__details">
                    <p>{i.name}</p>
                    <p>
                      {i.amount} x ${i.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(i.name)}
                    className="cart-display-item__remove"
                  >
                    X
                  </button>
                </div>
              ))
            ) : (
              <span className="cart-is-empty-text">Your cart is empty</span>
            )}
          </div>
          <Link onClick={() => setIsOpen(false)} to="/checkout">
            <button className="cart-display__checkout-btn">
              go to checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingBag;
