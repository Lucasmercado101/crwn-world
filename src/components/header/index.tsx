import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import ShoppingBag from './shoppingBag/index';
import Session from '../../unstated/session';
import './header.sass';

const Header = () => {
  const { logOut, session } = Session.useContainer();
  return (
    <div className="header">
      <Link to="/" className="header__logo-container">
        <Logo className="logo" />
      </Link>
      <li className="header-options">
        <Link className="header-options__option" to="/shop">
          Shop
        </Link>
        {!session ? (
          <Link className="header-options__option" to="/signin">
            Sign in
          </Link>
        ) : (
          <button
            className="header-options__option"
            onClick={() => {
              logOut();
              localStorage.removeItem('loggedIn');
            }}
          >
            Log out
          </button>
        )}
        <ShoppingBag />
      </li>
    </div>
  );
};

export default Header;
